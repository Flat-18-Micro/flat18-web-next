#!/bin/bash

# This script updates all page components to remove the direct Navbar import and usage
# since the Navbar is now included through the SiteLayout component

# Function to update a file
update_file() {
  local file=$1
  
  # Check if the file imports Navbar
  if grep -q "import Navbar from '@/components/Navbar'" "$file"; then
    echo "Updating $file..."
    
    # Remove the Navbar import
    sed -i '' "s/import Navbar from '@\/components\/Navbar'//g" "$file"
    
    # Remove the Navbar component usage
    sed -i '' "s/<Navbar \/>|<Navbar>.*<\/Navbar>//g" "$file"
    
    # Clean up any empty lines created by the removal
    sed -i '' '/^$/d' "$file"
    
    echo "Updated $file"
  fi
}

# Find all page.js files in the src/app directory and update them
find src/app -name "page.js" -type f | while read -r file; do
  update_file "$file"
done

echo "All page components have been updated!"
