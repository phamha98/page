const libraryReactNative = [
    "@react-native-async-storage/async-storage",
    "@react-native-camera-roll/camera-roll",
    "@react-native-clipboard/clipboard",
    "@react-native-community/art",
    "@react-native-community/blur",
    "@react-native-community/datetimepicker",
    "@react-native-community/hooks",
    "@react-native-community/netinfo",
    "@react-native-community/picker",
    "@react-native-community/slider",
    "@react-native-cookies/cookies",
    "@react-native-firebase/analytics",
    "@react-native-firebase/app",
    "@react-native-firebase/crashlytics",
    "@react-native-firebase/messaging",
    "@react-native-masked-view/masked-view",
    "@react-navigation/compat",
    "@react-navigation/drawer",
    "@react-navigation/elements",
    "@react-navigation/material-top-tabs",
    "@react-navigation/native",
    "@react-navigation/stack",
    "react-native-vector-icons",
    "i18n-js",
    "js-base64",
    "js-sha256",
    "lodash",
    "moment",
    "react-native-animatable",
    "react-native-background-timer",
    "react-native-device-info",
    "react-native-easy-grid",
    "react-native-event-listeners",
    "react-native-image-crop-picker",
    "react-native-localize",
    "react-native-mmkv-storage",
    "react-native-modal",
    "react-native-orientation-locker",
    "react-native-permissions",
    "react-native-progress",
    "react-native-reanimated",
    "react-native-render-html",
    "react-native-restart",
    "react-native-safe-area-context",
    "react-native-screens",
    "react-native-slowlog",
    "react-native-sound-player",
    "react-native-svg",
    "react-native-ui-lib",
    "react-native-uuid",
    "react-native-version-check",
    "react-native-voip-push-kit",
    "react-native-webview",
    "react-redux",
    "reactotron-react-native",
    "redux",
    "redux-saga",
    "reselect",
    "rn-fetch-blob",
]
const arrayPropertiesAndMethods = [
    "Array.from()",
    "Array.isArray()",
    "Array.of()",
    "Array.prototype.concat()",
    "Array.prototype.copyWithin()",
    "Array.prototype.entries()",
    "Array.prototype.every()",
    "Array.prototype.fill()",
    "Array.prototype.filter()",
    "Array.prototype.find()",
    "Array.prototype.findIndex()",
    "Array.prototype.forEach()",
    "Array.prototype.includes()",
    "Array.prototype.indexOf()",
    "Array.prototype.join()",
    "Array.prototype.keys()",
    "Array.prototype.lastIndexOf()",
    "Array.prototype.map()",
    "Array.prototype.pop()",
    "Array.prototype.push()",
    "Array.prototype.reduce()",
    "Array.prototype.reduceRight()",
    "Array.prototype.reverse()",
    "Array.prototype.shift()",
    "Array.prototype.slice()",
    "Array.prototype.some()",
    "Array.prototype.sort()",
    "Array.prototype.splice()",
    "Array.prototype.toLocaleString()",
    "Array.prototype.toString()",
    "Array.prototype.unshift()",
    "Array.prototype.values()",
    "Array.length",
    "Array.prototype"
];

const objectPropertiesAndMethods = [
    "Object.assign()",
    "Object.create()",
    "Object.entries()",
    "Object.freeze()",
    "Object.fromEntries()",
    "Object.getOwnPropertyDescriptor()",
    "Object.getOwnPropertyDescriptors()",
    "Object.getOwnPropertyNames()",
    "Object.getOwnPropertySymbols()",
    "Object.getPrototypeOf()",
    "Object.is()",
    "Object.isExtensible()",
    "Object.isFrozen()",
    "Object.isSealed()",
    "Object.keys()",
    "Object.preventExtensions()",
    "Object.seal()",
    "Object.setPrototypeOf()",
    "Object.values()",
    "Object.defineProperties()",
    "Object.defineProperty()",
    "Object.prototype.hasOwnProperty()",
    "Object.prototype.isPrototypeOf()",
    "Object.prototype.propertyIsEnumerable()",
    "Object.prototype.toLocaleString()",
    "Object.prototype.toString()",
    "Object.prototype.valueOf()"
];
const linuxCommandExamples = [
    "ls : ls, ls -l, ls -a, ls -lh",
    "cd : cd /path/to/directory, cd .., cd ~",
    "pwd : pwd",
    "mkdir : mkdir new_directory",
    "rmdir : rmdir directory_to_remove",
    "touch : touch new_file.txt",
    "cp : cp file1 file2, cp -r directory1 directory2",
    "mv : mv file1 file2, mv file1 new_directory",
    "rm : rm file.txt, rm -r directory",
    "cat : cat file.txt, cat file1 file2",
    "more : more file.txt",
    "less : less file.txt",
    "head : head file.txt",
    "tail : tail file.txt",
    "grep : grep 'pattern' file.txt, grep -r 'pattern' directory",
    "find : find /path/to/search -name 'filename'",
    "chmod : chmod 755 file.txt, chmod +x script.sh",
    "chown : chown user:group file.txt",
    "chgrp : chgrp group file.txt",
    "useradd : useradd username",
    "userdel : userdel username",
    "usermod : usermod -aG group username",
    "groupadd : groupadd newgroup",
    "groupdel : groupdel groupname",
    "groupmod : groupmod -n newgroup oldgroup",
    "passwd : passwd",
    "su : su username",
    "sudo : sudo command",
    "clear : clear",
    "exit : exit",
    "shutdown : shutdown -h now",
    "reboot : reboot",
    "ifconfig : ifconfig, ifconfig eth0",
    "ip : ip address show, ip route",
    "ping : ping example.com, ping -c 5 example.com",
    "traceroute : traceroute example.com",
    "netstat : netstat -tuln",
    "ss : ss -tuln",
    "ps : ps aux, ps -ef | grep processname",
    "top : top",
    "kill : kill PID, kill -9 PID",
    "killall : killall processname",
    "bg : bg",
    "fg : fg",
    "jobs : jobs",
    "cron : crontab -e, cron -l",
    "at : at now + 1 hour",
    "date : date, date '+%Y-%m-%d %H:%M:%S'",
    "time : time command",
    "cal : cal, cal -3",
    "uptime : uptime",
    "free : free -h",
    "df : df, df -h",
    "du : du, du -h",
    "tar : tar -cvf archive.tar directory",
    "gzip : gzip file.txt, gzip -d file.txt.gz",
    "gunzip : gunzip file.txt.gz",
    "zip : zip archive.zip file1 file2",
    "unzip : unzip archive.zip",
    "wget : wget http://example.com/file.txt",
    "curl : curl http://example.com",
    "scp : scp file.txt user@host:/remote/directory",
    "ssh : ssh user@host",
    "rsync : rsync -avz source/ destination/",
    "mount : mount /dev/sda1 /mnt",
    "umount : umount /mnt",
    "ln : ln -s /path/to/file linkname",
    "locate : locate filename",
    "which : which command",
    "history : history",
    "man : man command",
    "apropos : apropos keyword",
    "info : info command",
    "who : who",
    "w : w",
    "last : last",
    "finger : finger user",
    "tree : tree /path/to/directory",
    "stat : stat file.txt",
    "watch : watch command",
    "nc : nc host port",
    "ncat : ncat host port",
    "echo : echo 'Hello, World!'",
    "source : source script.sh",
    "export : export VAR=value",
    "alias : alias command='command options'",
    "wc : wc file.txt",
    "sort : sort file.txt",
    "uniq : uniq file.txt",
    "cut : cut -d' ' -f1 file.txt",
    "paste : paste file1.txt file2.txt",
    "join : join file1.txt file2.txt",
    "awk : awk '{print $1}' file.txt",
    "sed : sed 's/search/replace/g' file.txt",
    "diff : diff file1.txt file2.txt",
    "patch : patch -i patchfile.txt",
    "rsync : rsync -avz source/ destination/",
    "scp : scp file.txt user@host:/remote/directory",
    "ssh : ssh user@host",
    "sftp : sftp user@host",
    "tar : tar -cvf archive.tar directory",
    "gzip : gzip file.txt, gzip -d file.txt.gz",
    "gunzip : gunzip file.txt.gz",
    "bzip2 : bzip2 file.txt, bzip2 -d file.txt.bz2",
    "bunzip2 : bunzip2 file.txt.bz2",
    "xz : xz file.txt, xz -d file.txt.xz",
    "unxz : unxz file.txt.xz",
    "zip : zip archive.zip file1 file2",
    "unzip : unzip archive.zip",
    "cat : cat file.txt",
    "tac : tac file.txt",
    "head : head file.txt",
    "tail : tail file.txt",
    "less : less file.txt",
    "more : more file.txt",
    "vim : vim file.txt",
    "nano : nano file.txt",
    "emacs : emacs file.txt",
    "vi : vi file.txt",
    "grep : grep 'pattern' file.txt",
    "find : find /path/to/search -name 'filename'",
    "locate : locate filename",
    "which : which command",
    "whereis : whereis command",
    "sed : sed 's/search/replace/g' file.txt",
    "awk : awk '{print $1}' file.txt",
    "cut : cut -d' ' -f1 file.txt",
    "paste : paste file1.txt file2.txt",
    "sort : sort file.txt",
    "uniq : uniq file.txt",
    "wc : wc file.txt",
    "tee : tee file.txt",
    "watch : watch command",
    "xargs : xargs command",
    "diff : diff file1.txt file2.txt",
    "cmp : cmp file1.txt file2.txt",
    "comm : comm file1.txt file2.txt",
    "tr : tr 'a-z' 'A-Z' < file.txt",
    "stat : stat file.txt",
    "tree : tree /path/to/directory",
    "yes : yes 'y'",
    "hostname : hostname",
    "uname : uname -a",

]

const adbCommands = [
    "adb devices",
    "adb shell",
    "adb push <local> <remote>",
    "adb pull <remote> [<local>]",
    "adb install <path_to_apk>",
    "adb uninstall <package_name>",
    "adb forward <local> <remote>",
    "adb reverse <remote> <local>",
    "adb start-server",
    "adb kill-server",
    "adb get-state",
    "adb wait-for-device",
    "adb reboot",
    "adb reboot-bootloader",
    "adb root",
    "adb unroot",
    "adb remount",
    "adb sync",
    "adb backup [-f <file>] [-apk|-noapk] [-obb|-noobb] [-shared|-noshared] [-all] [-system|-nosystem] [<packages...>]",
    "adb restore <file>",
    "adb help"
];

const sqlCommands = [
    "CREATE TABLE table_name (column1 datatype, column2 datatype, ...);",
    "ALTER TABLE table_name ADD column_name datatype;",
    "ALTER TABLE table_name DROP COLUMN column_name;",
    "ALTER TABLE table_name ALTER COLUMN column_name datatype;",
    "DROP TABLE table_name;",
    "SELECT column1, column2, ... FROM table_name WHERE condition;",
    "INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);",
    "UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;",
    "DELETE FROM table_name WHERE condition;",
    "CREATE DATABASE database_name;",
    "DROP DATABASE database_name;",
    "USE database_name;"
];
const gitOptions = [
    "git add",
    "git am",
    "git annotate",
    "git apply",
    "git archive",
    "git bisect",
    "git blame",
    "git branch",
    "git bundle",
    "git cat-file",
    "git check-attr",
    "git check-ignore",
    "git check-mailmap",
    "git check-ref-format",
    "git checkout",
    "git checkout-index",
    "git cherry",
    "git cherry-pick",
    "git citool",
    "git clean",
    "git clone",
    "git column",
    "git commit",
    "git commit-tree",
    "git config",
    "git count-objects",
    "git credential",
    "git credential-cache",
    "git credential-store",
    "git daemon",
    "git describe",
    "git diff",
    "git diff-files",
    "git diff-index",
    "git diff-tree",
    "git difftool",
    "git difftool--helper",
    "git fast-export",
    "git fast-import",
    "git fetch",
    "git fetch-pack",
    "git filter-branch",
    "git fmt-merge-msg",
    "git for-each-ref",
    "git format-patch",
    "git fsck",
    "git fsck-objects",
    "git gc",
    "git get-tar-commit-id",
    "git grep",
    "git gui",
    "git hash-object",
    "git help",
    "git http-backend",
    "git http-fetch",
    "git http-push",
    "git imap-send",
    "git index-pack",
    "git init",
    "git init-db",
    "git instaweb",
    "git interpret-trailers",
    "git log",
    "git ls-files",
    "git ls-remote",
    "git ls-tree",
    "git mailinfo",
    "git mailsplit",
    "git merge",
    "git merge-base",
    "git merge-file",
    "git merge-index",
    "git merge-octopus",
    "git merge-one-file",
    "git merge-ours",
    "git merge-recursive",
    "git merge-resolve",
    "git merge-subtree",
    "git merge-tree",
    "git mergetool",
    "git mergetool--lib",
    "git mktag",
    "git mktree",
    "git mv",
    "git name-rev",
    "git notes",
    "git pack-objects",
    "git pack-redundant",
    "git pack-refs",
    "git patch-id",
    "git prune",
    "git prune-packed",
    "git pull",
    "git push",
    "git quiltimport",
    "git read-tree",
    "git rebase",
    "git rebase--helper",
    "git receive-pack",
    "git reflog",
    "git remote",
    "git remote-ext",
    "git remote-fd",
    "git remote-ftp",
    "git remote-ftps",
    "git remote-http",
    "git remote-https",
    "git remote-testgit",
    "git repack",
    "git replace",
    "git request-pull",
    "git rerere",
    "git reset",
    "git restore",
    "git revert",
    "git rm",
    "git send-email",
    "git send-pack",
    "git sh-i18n--envsubst",
    "git shell",
    "git shortlog",
    "git show",
    "git show-branch",
    "git show-index",
    "git show-ref",
    "git stage",
    "git stash",
    "git status",
    "git stripspace",
    "git submodule",
    "git subtree",
    "git svn",
    "git switch",
    "git symbolic-ref",
    "git tag",
    "git unpack-file",
    "git unpack-objects",
    "git update-index",
    "git update-ref",
    "git update-server-info",
    "git upload-archive",
    "git upload-pack",
    "git var",
    "git verify-commit",
    "git verify-pack",
    "git verify-tag",
    "git web--browse",
    "git whatchanged",
    "git worktree",
    "git write-tree"
];
const recent = [
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
    `GET https://jsonplaceholder.typicode.com/todos `,
    'git reset HEAD <file>',
    'git reset HEAD~',
    'git reset HEAD^',
    'git reset --hard HEAD',
    'git reset --soft HEAD^',
    'git reset --soft HEAD^',
    'git reset --hard HEAD',
    'git checkout -b <branch-name>',
    'git worktree list',
    'git worktree add ../my-repo-dev dev',
    'git worktree remove ../my-repo-dev',
    'git log --oneline',
    'git remote -v',
    'git remote add second-remote <URL của second-remote>',
    'git push origin <branch-name>',
    'git push second-remote <branch-name>',
    'git pull origin <branch-name>',
    'git pull second-remote <branch-name>',
    'git pull second-remote feature-branch',
    'git checkout -b feature-branch',
    'git pull second-remote feature-branch"',
    'git branch -d <tên-nhánh>',
    'git branch -D <tên-nhánh>',
    'git push second-remote --delete feature-branch',
    'git remote remove second-remote',
    'git remote rename old-name new-name',
    'git branch -vv',
    'git push origin/branch-name',
    'git branch -u origin/feature/name"',
    'git fetch second <branch-name>',
    'git push origin branch-name ',
    'git branch --set-upstream-to=new-remote/branch-name local-branch-name',
    'git checkout -b new-chatA second-remote/chatA',
    'git branch --set-upstream-to=second-remote/chatA new-chatA',
    'git status',
    'git push second-remote new-chatA',
    'git fetch second <branch-name>',
    'git merge second/feature-name',
    'git merge --allow-unrelated-histories source-branch',
    'git merge --squash',
    'git merge --allow-unrelated-histories --squash ""',
    'git worktree list',
    'git worktree add ./<new folder> second/dev',
    'git add .',
    'git commit -m "" ',
    'git checkout <fix>',
    'git merge <fix>',
    'git commit -m "',
    'git worktree remove ./my-repo-dev',
    'git rev-list --count HEAD',
    'git rev-list --count <branch_name>',
    'git reset --soft HEAD^',
    'git reset --hard HEAD',
    'git branch --show-current',
    'git commit --amend -m ""',
    'git log -1',
    'git push --force',
    'git branch -m old-branch-name new-branch-name',
    'git checkout --ours ./ios  ',
    'git add ./ios',
    'git checkout --theirs src/conflicting_folder',
    'git reset ios/',
    'git clean -df ios/',
    "pod init",
    "pod install",
    "pod install --repo-update",
    "pod install --project-directory=DIR",
    "pod install --clean-install",
    "pod update",
    "pod update POD_NAMES",
    "pod update --repo-update",
    "pod repo update",
    "pod search QUERY",
    "pod setup",
    "pod deintegrate",
    "pod lib create NAME",
    "pod spec create NAME",
    "pod spec lint",
    "pod trunk register EMAIL",
    "pod trunk push",
    "pod trunk info POD_NAME",
    "pod trunk me",
    "pod env",
    "pod cache list",
    "pod cache clean",
    "pod cache clean POD_NAME",
    "pod install --verbose",
    "pod install --no-repo-update",
    "pod install --silent",
    "pod install --clean-install",
    "pod install --repo-update",
    "pod install --project-directory=<directory>",
    "pod install --use-libraries",
    "pod install --use-modular-headers",
    "pod install --no-use-binaries",
    "pod install --no-integrate",
    "pod install --no-ansi",
    "pod install --no-pod-update",
    "pod install --no-headers",
    "pod install --no-include-dependencies",
    "pod install --use-default-hooks",
    "pod install --disable-dependency-validation",
    "pod install --allow-root",
    "pod install --skip-podspec-validation",
    "pod install --no-offline",
    "pod install --no-install",
    "pod install --repo-update",
    "pod install --generate-multiple-pod-projects",
    "pod install --deployment",
    "pod install --lockfile-timeout",
    "pod install --no-replace-pods",
    "pod install --prebuild-install",
    "pod install --no-prebuild",
    "pod install --project-overrides=<path>",
    "pod install --subdirectory=<path>",
    "pod install --configuration=<configuration>",
    "pod install --silent",
    "pod install --no-ansi",
    "pod install --color",
    "pod install --repo-update",
    "pod install --verbose",
    "pod install --no-repo-update",
    "pod install --clean-install",
    "pod install --silent",
    "pod install --repo-update",
    "pod install --deployment",
    "pod install --lockfile-timeout",
    "pod install --use-libraries",
    "pod install --use-modular-headers",
    "pod install --no-use-binaries",
    "pod install --no-integrate",
    "pod install --no-ansi",
    "pod install --no-pod-update",
    "pod install --no-headers",
    "pod install --no-include-dependencies",
    "pod install --use-default-hooks",
    "pod install --disable-dependency-validation",
    "pod install --allow-root",
    "pod install --skip-podspec-validation",
    "pod install --no-offline",
    "pod install --no-install",
    "pod install --repo-update",
    "pod install --generate-multiple-pod-projects",
    "pod install --deployment",
    "pod install --lockfile-timeout",
    "pod install --no-replace-pods",
    "pod install --prebuild-install",
    "pod install --no-prebuild",
    "pod install --project-overrides=<path>",
    "pod install --subdirectory=<path>",
    "pod install --configuration=<configuration>",
    "pod install --silent",
    "pod install --no-ansi",
    "pod install --color",
    "pod install --repo-update",
    "pod install --verbose",
    "pod install --no-repo-update",
    "pod install --clean-install",
    "pod install --silent",
    "pod install --repo-update",
    "pod install --deployment",
    "pod install --lockfile-timeout",
    "pod install --use-libraries",
    "pod install --use-modular-headers",
    "pod install --no-use-binaries",
    "pod install --no-integrate",
    "pod install --no-ansi",
    "pod install --no-pod-update",
    "pod install --no-headers",
    "pod install --no-include-dependencies",
    "pod install --use-default-hooks",
    "pod install --disable-dependency-validation",
    "pod install --allow-root",
    "pod install --skip-podspec-validation",
    "pod install --no-offline",
    "pod install --no-install",
    "pod install --repo-update",
    "pod install --generate-multiple-pod-projects",
    "pod install --deployment",
    "pod install --lockfile-timeout",
    "pod install --no-replace-pods",
    "pod install --prebuild-install",
    "pod install --no-prebuild",
    "pod install --project-overrides=<path>",
    "pod install --subdirectory=<path>",
    "pod install --configuration=<configuration>",
    "pod install --silent",
    "pod install --no-ansi",
    "pod install --color",
    "pod install --repo-update"
]
const data = [
    ...gitOptions,
    ...sqlCommands,
    ...adbCommands,
    ...linuxCommandExamples,
    ...objectPropertiesAndMethods,
    ...recent,
    ...arrayPropertiesAndMethods,
    ...libraryReactNative
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
        const code = document.createElement('code');
        code.textContent = result;
        //li.textContent = result;

        // Create a copy button
        const copyButton = document.createElement('button');
        // copyButton.textContent = 'Copyf';
        const copyIcon = document.createElement('i');
        copyIcon.className = 'fas fa-copy';
        copyButton.className = 'copy-button'; // Thêm class copy-button
        copyButton.appendChild(copyIcon);
        copyButton.addEventListener('click', () => {
            copyToClipboard(result);
        });

        // Append the copy button to the list item
        li.appendChild(code);
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
    // document.execCommand('copy'); // Copy the text to clipboard
    document.body.removeChild(textarea); // Clean up
    alert('Copied : ' + text);
}