import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import WebSocket from 'ws';

const appUrl = process.env.APP_URL || 'https://workouts.flat18.app';
const chromePath =
  process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const remotePort = Number(process.env.CHROME_REMOTE_PORT || 9333);
const screenshotDir = path.resolve('case-study/screenshots');
const library = JSON.parse(fs.readFileSync(path.resolve('public/api/library.json'), 'utf8'));

fs.mkdirSync(screenshotDir, { recursive: true });

function pickExercise(exerciseId) {
  const exercise = library.exercises.find((item) => item.exercise_id === exerciseId);
  if (!exercise) throw new Error(`Missing exercise ${exerciseId}`);
  return {
    ...exercise,
    default_include: exercise.default_include !== 'false',
    unilateral: exercise.unilateral === 'true'
  };
}

function workoutExercise(id, exerciseId, orderIndex, sets = 3, repMin = 8, repMax = 12) {
  return {
    workout_exercise_id: id,
    exercise: pickExercise(exerciseId),
    order_index: orderIndex,
    prescribed_sets: sets,
    rep_min: repMin,
    rep_max: repMax,
    note_text: 'Compounds first, then controlled accessory work.'
  };
}

function exerciseLog(id, workoutExerciseId, exerciseId, sessionId, completedAt) {
  return {
    exercise_log_id: id,
    workout_exercise_id: workoutExerciseId,
    exercise_id: exerciseId,
    session_id: sessionId,
    completed_flag: true,
    completed_at: completedAt,
    completion_type: 'set'
  };
}

function setLog(id, exerciseLogId, exerciseId, setNumber, reps, weight, rir, completedAt) {
  return {
    set_log_id: id,
    exercise_log_id: exerciseLogId,
    exercise_id: exerciseId,
    set_number: setNumber,
    planned_reps: reps,
    actual_reps: reps,
    planned_weight: weight,
    actual_weight: weight,
    rir,
    completed_at: completedAt
  };
}

const dayUpperA = {
  id: 'case-day-upper-a',
  label: 'Upper',
  status: 'planned',
  day_index: 0,
  template_id: 'TPL004',
  target_groups: ['Chest', 'Back', 'Shoulders', 'Biceps', 'Triceps'],
  exercises: [
    workoutExercise('case-we-bench', 'EX059', 0, 4, 6, 12),
    workoutExercise('case-we-row', 'EX022', 1, 4, 8, 12),
    workoutExercise('case-we-shoulder', 'EX030', 2, 3, 8, 12),
    workoutExercise('case-we-curl', 'EX043', 3, 3, 10, 15),
    workoutExercise('case-we-pushdown', 'EX051', 4, 3, 10, 15)
  ]
};

const dayLowerA = {
  id: 'case-day-lower-a',
  label: 'Lower',
  status: 'planned',
  day_index: 1,
  template_id: 'TPL005',
  target_groups: ['Legs', 'Glutes', 'Posterior chain'],
  exercises: [
    workoutExercise('case-we-squat', 'EX001', 0, 4, 6, 10),
    workoutExercise('case-we-rdl', 'EX007', 1, 3, 8, 12),
    workoutExercise('case-we-legpress', 'EX009', 2, 3, 10, 15),
    workoutExercise('case-we-calf', 'EX016', 3, 3, 12, 20)
  ]
};

const dayUpperB = {
  id: 'case-day-upper-b',
  label: 'Upper',
  status: 'planned',
  day_index: 3,
  template_id: 'TPL004',
  target_groups: ['Chest', 'Back', 'Shoulders', 'Biceps', 'Triceps'],
  exercises: [
    workoutExercise('case-we-incline', 'EX062', 0, 4, 8, 12),
    workoutExercise('case-we-pulldown', 'EX018', 1, 4, 8, 12),
    workoutExercise('case-we-lateral', 'EX032', 2, 3, 12, 20),
    workoutExercise('case-we-preacher', 'EX044', 3, 3, 10, 15),
    workoutExercise('case-we-overhead-tri', 'EX049', 4, 3, 10, 15)
  ]
};

const dayLowerB = {
  id: 'case-day-lower-b',
  label: 'Lower',
  status: 'planned',
  day_index: 4,
  template_id: 'TPL005',
  target_groups: ['Legs', 'Glutes', 'Posterior chain'],
  exercises: [
    workoutExercise('case-we-hack', 'EX002', 0, 4, 8, 12),
    workoutExercise('case-we-lunge', 'EX006', 1, 3, 10, 12),
    workoutExercise('case-we-curl-leg', 'EX012', 2, 3, 10, 15),
    workoutExercise('case-we-extension', 'EX013', 3, 3, 12, 15)
  ]
};

const profile = {
  profile_id: 'case-profile-001',
  created_at: '2026-04-27T08:00:00.000Z',
  age: 34,
  gender: 'na',
  goal_id: 'GOAL004',
  goal_name: 'Gain muscle',
  intensity: 'moderate',
  availability_days: 4,
  experience_level: 'intermediate'
};

const plan = {
  activeSchedule: {
    schedule_id: 'SCH003',
    schedule_name: 'Upper / Lower',
    default_training_days: '4',
    cadence_summary: 'Alternating upper and lower sessions',
    tile_labels: 'upper; lower',
    pattern_type: 'High efficiency split',
    best_for: 'Good for maintain weight, lose fat, gain muscle',
    cycle_length: 7
  },
  workoutDays: [
    dayUpperA,
    dayLowerA,
    { id: 'case-day-rest-1', label: 'Rest', status: 'rest', day_index: 2, exercises: [] },
    dayUpperB,
    dayLowerB,
    { id: 'case-day-rest-2', label: 'Rest', status: 'rest', day_index: 5, exercises: [] },
    { id: 'case-day-rest-3', label: 'Rest', status: 'rest', day_index: 6, exercises: [] }
  ]
};

const exerciseLogs = [
  exerciseLog('case-log-bench', 'case-we-bench', 'EX059', dayUpperA.id, '2026-04-27T18:40:00.000Z'),
  exerciseLog('case-log-row', 'case-we-row', 'EX022', dayUpperA.id, '2026-04-27T18:55:00.000Z'),
  exerciseLog('case-log-shoulder', 'case-we-shoulder', 'EX030', dayUpperA.id, '2026-04-27T19:10:00.000Z'),
  exerciseLog('case-log-squat', 'case-we-squat', 'EX001', dayLowerA.id, '2026-04-28T18:35:00.000Z'),
  exerciseLog('case-log-rdl', 'case-we-rdl', 'EX007', dayLowerA.id, '2026-04-28T18:50:00.000Z')
];

const setLogs = [
  setLog('case-set-bench-1', 'case-log-bench', 'EX059', 1, 10, 70, 2, '2026-04-27T18:30:00.000Z'),
  setLog('case-set-bench-2', 'case-log-bench', 'EX059', 2, 9, 70, 1, '2026-04-27T18:36:00.000Z'),
  setLog('case-set-bench-3', 'case-log-bench', 'EX059', 3, 8, 70, 1, '2026-04-27T18:40:00.000Z'),
  setLog('case-set-row-1', 'case-log-row', 'EX022', 1, 12, 55, 2, '2026-04-27T18:48:00.000Z'),
  setLog('case-set-row-2', 'case-log-row', 'EX022', 2, 11, 55, 1, '2026-04-27T18:53:00.000Z'),
  setLog('case-set-row-3', 'case-log-row', 'EX022', 3, 10, 55, 1, '2026-04-27T18:55:00.000Z'),
  setLog('case-set-shoulder-1', 'case-log-shoulder', 'EX030', 1, 10, 24, 2, '2026-04-27T19:05:00.000Z'),
  setLog('case-set-shoulder-2', 'case-log-shoulder', 'EX030', 2, 9, 24, 2, '2026-04-27T19:10:00.000Z'),
  setLog('case-set-squat-1', 'case-log-squat', 'EX001', 1, 8, 95, 2, '2026-04-28T18:22:00.000Z'),
  setLog('case-set-squat-2', 'case-log-squat', 'EX001', 2, 8, 95, 1, '2026-04-28T18:29:00.000Z'),
  setLog('case-set-squat-3', 'case-log-squat', 'EX001', 3, 7, 95, 1, '2026-04-28T18:35:00.000Z'),
  setLog('case-set-rdl-1', 'case-log-rdl', 'EX007', 1, 10, 85, 2, '2026-04-28T18:45:00.000Z'),
  setLog('case-set-rdl-2', 'case-log-rdl', 'EX007', 2, 9, 85, 2, '2026-04-28T18:50:00.000Z')
];

const storage = {
  workouts_profile: profile,
  workouts_plan: plan,
  workouts_logs: { exerciseLogs, setLogs }
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForChrome() {
  const endpoint = `http://127.0.0.1:${remotePort}/json/list`;
  for (let i = 0; i < 60; i += 1) {
    try {
      const response = await fetch(endpoint);
      if (response.ok) return response.json();
    } catch {
      // Chrome is still starting.
    }
    await delay(250);
  }
  throw new Error('Chrome did not expose a debugging endpoint in time.');
}

class CdpClient {
  constructor(wsUrl) {
    this.nextId = 1;
    this.pending = new Map();
    this.ws = new WebSocket(wsUrl);
    this.ws.on('message', (raw) => {
      const message = JSON.parse(raw.toString());
      if (message.id && this.pending.has(message.id)) {
        const { resolve, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        if (message.error) reject(new Error(message.error.message));
        else resolve(message.result || {});
      }
    });
  }

  async open() {
    if (this.ws.readyState === WebSocket.OPEN) return;
    await new Promise((resolve, reject) => {
      this.ws.once('open', resolve);
      this.ws.once('error', reject);
    });
  }

  send(method, params = {}) {
    const id = this.nextId;
    this.nextId += 1;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });
  }

  close() {
    this.ws.close();
  }
}

async function launchChrome() {
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fit-case-study-chrome-'));
  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${remotePort}`,
    `--user-data-dir=${userDataDir}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1440,1100',
    'about:blank'
  ], {
    stdio: ['ignore', 'ignore', 'pipe']
  });

  chrome.stderr.on('data', () => {});

  return { chrome, userDataDir };
}

async function navigate(client, url) {
  await client.send('Page.navigate', { url });
  await delay(1400);
  await client.send('Runtime.evaluate', {
    expression: 'document.fonts && document.fonts.ready',
    awaitPromise: true
  }).catch(() => {});
}

async function seedStorage(client) {
  await navigate(client, `${appUrl}/`);
  const expression = `
    localStorage.clear();
    const payload = ${JSON.stringify(storage)};
    for (const [key, value] of Object.entries(payload)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    true;
  `;
  await client.send('Runtime.evaluate', { expression, awaitPromise: true });
}

async function capture(client, route, fileName, options = {}) {
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: options.width || 1440,
    height: options.height || 1100,
    deviceScaleFactor: 1,
    mobile: Boolean(options.mobile)
  });
  await navigate(client, `${appUrl}${route}`);
  if (options.beforeCapture) {
    await client.send('Runtime.evaluate', {
      expression: options.beforeCapture,
      awaitPromise: true
    });
    await delay(700);
  }
  await client.send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
  await delay(250);
  const result = await client.send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false
  });
  fs.writeFileSync(path.join(screenshotDir, fileName), Buffer.from(result.data, 'base64'));
}

const { chrome } = await launchChrome();

try {
  const targets = await waitForChrome();
  const pageTarget = targets.find((target) => target.type === 'page') || targets[0];
  const client = new CdpClient(pageTarget.webSocketDebuggerUrl);
  await client.open();
  await client.send('Page.enable');
  await client.send('Runtime.enable');

  await seedStorage(client);

  await capture(client, '/', '01-onboarding-profile.png');
  await capture(client, '/schedule', '02-schedule-recommendations.png');
  await capture(client, '/plan', '03-plan-overview.png');
  await capture(client, `/workout/${dayUpperA.id}`, '04-workout-logger.png', {
    beforeCapture: `
      new Promise((resolve) => {
        setTimeout(() => {
          const firstHeader = document.querySelector('.el-collapse-item__header');
          if (firstHeader) firstHeader.click();
          setTimeout(resolve, 350);
        }, 100);
      })
    `
  });
  await capture(client, '/dashboard', '05-progress-dashboard.png');
  await capture(client, '/library', '06-exercise-library.png');
  await capture(client, '/plan', '07-mobile-plan.png', {
    width: 390,
    height: 844,
    mobile: true
  });

  client.close();
} finally {
  chrome.kill('SIGTERM');
}
