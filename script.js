// Example: dynamically change follower name
function updateFollower(name) {
    document.getElementById("follower-name").textContent = name;
}

// Simulate a new follower alert
setTimeout(function() {
    updateFollower("AwesomeGamer99");
}, 5000);
