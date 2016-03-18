<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    
    return view('welcome');
});

Route::get('/comments', function () {
    $file = public_path().'/comments.json';
    $contents = '{}';
    if(File::exists($file)){
        $contents = File::get(public_path().'/comments.json');
    }
    return $contents;
});

Route::post('/comments', function () {
    $file = public_path().'/comments.json';
    $id = Request::input('id', strtotime('now'));
    $author = Request::input('author', 'abcdefg');
    $text = Request::input('text', 'test');
    
    $contents = [];
    if(File::exists($file)){
        $contents = File::get(public_path().'/comments.json');
        $contents = json_decode($contents,TRUE);
    }

    $contents[] = [
        'id' => $id,
        'author' => $author,
        'text' => $text,
    ];
    
    $contents = json_encode($contents);
    File::put($file,$contents);
    
    return $contents;
});


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
