# Laravel React ES6 Tutorial 
Simple Tutorial

### Use
+ CentOS7.0
+ PHP7.0
+ Laravel5.2
+ Node.js v5.8.0
+ ES6(ECMAScript 2015)
+ React v0.14.7
+ Elixir


### Ready
```sh
#Nodebrew install
sudo yum -y install perl

#Install with curl.
curl -L git.io/nodebrew | perl - setup

#Path setting
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bashrc

#Reload config.
source ~/.bashrc

#Install node.js
#nodebrew install <version>
nodebrew install-binary latest
nodebrew use latest
node -v
v5.8.0

#alias setting
nodebrew alias latest

#Global install
npm install -g gulp
npm install -g npm
npm install -g bower
```

### Setup
```sh
#Clone the repository
git clone https://github.com/richellin/Laravel-React-ES6-Tutorial-.git

#Laravel Setting
composer install

#Install package.json 
npm install

#Elixir Running Task
gulp watch

#Start artisan
php artisan serve 
#OR
php artisan serve --host 0.0.0.0

#Open your browser to 
http://localhost:8000
```

### Error Issue
```sh
#make g++ command not found
sudo yum install gcc-c++

#gulp-notify: [Error in notifier] Error in plugin 'gulp-notify'
sudo yum install libnotify
```

### Link
+ [React tutorial](http://facebook.github.io/react/docs/tutorial.html)
+ [Laravel Documentation](https://laravel.com/docs/5.2)
+ [React Tutorial ES6](https://github.com/sadah/react-tutorial-es6.git)
+ [라라벨 (Laravel) 5 입문 및 실전 강좌](https://github.com/appkr/l5essential)
+ [nodebrew을 이용해서 Node.js 설치](http://richellin.tistory.com/6)
+ [nodebrew Node.js version manager](https://github.com/hokaccha/nodebrew)
