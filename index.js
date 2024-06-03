// Sample data
const data = [
    'env | grep ARCHS',
    'nvm alias default 18',
    'adb reverse tcp:8081 tcp:8081',
    `npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle`,
    `sudo xcode-select --switch /Applications/Xcode.app`,
    `diff -u node_modules/module-name/example.js modified/example.js > my-patch.patch`,
    `patch -p0 < my-patch.patch`,
    `git stash list`,
    `git diff stash@{0} > my_stash.patch`,
    `git apply my_stash.patch`,

    `xcrun simctl erase  12F1624A-B635-438A-9F81-8B3A0DC81191`,
    `xcrun simctl erase all`,
    `xcrun simctl list`,
    `https://www.tensorflow.org/`,
    `yum install mariadb-server mariadb-libs mariadb`,
    `sudo systemctl start mariadb`,
    `brew services restart redis`,
    `mysql -u root -p`,
    `SELECT user,authentication_string,plugin,host FROM mysql.user;`,
    `SHOW DATABASES;`,
    `SELECT host FROM mysql.user WHERE User = 'root';`,
    `GRANT ALL ON *.* to root@'172.0.0.1' IDENTIFIED BY 'pass';`,
    `FLUSH PRIVILEGES;`,
    `ALTER USER 'root'@'172.0.0.1' IDENTIFIED BY 'pass';`,
    `SET PASSWORD FOR 'root'@'172.0.0.1' = PASSWORD('pass');`,
    `sudo netstat -tuln`,
    `sudo ss -tlnp`,
    `yum info firewalld`,
    `sudo systemctl start firewalld`,
    `firewall-cmd --zone=public --add-port=3306/tcp`,
    `sudo firewall-cmd --list-ports`,
    `adb - s emulator - 5554 install myapp.apk`,
    `adb reverse tcp: 8081 tcp: 8081`,
    `adb devices`,
    `adb - s emulator - 5554 reverse tcp: 9090 tcp: 9090`,
    `adb shell input keyevent 82`,
    `#code = 82`,
    `adb - s emulator - 5554 shell input keyevent 82`,
    `adb devices`,
    `adb kill - server`,
    `adb start - server`,
    `./ gradlew--stop #(in MacOS)`,
    `./ gradlew cleanBuildCache #(in MacOS)`,
    `rm - rf / tmp / metro -* `,
    `chmod - R 0777 / tmp`,
    `pm2 list`,
    `pm2 start app.js`,
    `pm2 start app.js--name "my-app"`,
    `pm2 show < process_name_or_id > `,
    `pm2 stop < process_name_or_id > `,
    `pm2 restart < process_name_or_id > `,
    `pm2 stop all`,
    `pm2 restart all`,
    `pm2 delete <process_name_or_id>`,
    `pm2 save`,
    `pm2 logs <process_name_or_id>`,
    `pm2 logs`,
    `pm2 update`,
    `subprojects { subproject -> `,
    `if (project['name'] == 'react-native-reanimated') {
    `,
    `project.configurations {compile { } } `,
    `curl - X POST - H "content-type:application/json" - H "user-agent:RC Mobile; ios 17.2; `,
    `v1.1.50 (2023080386)" https://abv -d '{ }' |    jq`,
    `for i in {1..100}; do`,
    `##*.http`,
    `### Get User Profile Request`,
    `GET https://jsonplaceholder.typicode.com/todos `,
    `Authorization: `,
]
// Function to render search results
function renderResults(results) {
    const resultList = document.getElementById('results');
    resultList.innerHTML = '';

    if (results.length === 0) {
        resultList.innerHTML = '<li>No results found</li>';
        return;
    }

    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;

        // Create a copy button
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.className = 'copy-button'; // Thêm class copy-button
        copyButton.addEventListener('click', () => {
            copyToClipboard(result);
        });

        // Append the copy button to the list item
        li.appendChild(copyButton);

        // Append the list item to the results list
        resultList.appendChild(li);
    });
}

// Function to handle search
function handleSearch(event) {
    const searchText = event.target.value.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(searchText));
    renderResults(filteredData);
}

// Attach event listener to search input
document.getElementById('searchInput').addEventListener('input', handleSearch);
function copyToClipboard(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed'; // Ensure it's out of view
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy'); // Copy the text to clipboard
    document.body.removeChild(textarea); // Clean up
    //alert('Copied : ' + text);
}