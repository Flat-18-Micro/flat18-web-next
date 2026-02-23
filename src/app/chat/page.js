export const metadata = {
  title: 'Flat 18 - Chat',
  description: 'Start a chat with the Flat 18 team.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ChatPage() {
  return (
    <section className="section">
      <div className="container text-center">
        <h1>Connecting you to chat</h1>
        <p>
          The chat window should open automatically. If it does not, tap the chat bubble
          in the bottom corner or use the button below.
        </p>
        <a className="btn btn-primary btn-lg" href="#chat">
          Open chat
          <span className="btn-shine" aria-hidden="true"></span>
        </a>
      </div>
    </section>
  )
}
