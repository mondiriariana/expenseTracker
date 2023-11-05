#!/bin/bash

echo "Starting the backend."

# Check if the backend server is already running
if ! pgrep -f "java -jar your-backend-jar-file.jar" > /dev/null; then
    cd java
    echo "Current working directory: $(pwd)"
    ./start.sh
else
    echo "Backend server is already running."
fi
