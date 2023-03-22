<?php

namespace app\api\controller;

use app\common\controller\Api;

/**
 * 示例接口
 */
class Google extends Api
{

    //如果$noNeedLogin为空表示所有接口都需要登录才能请求
    //如果$noNeedRight为空表示所有接口都需要验证权限才能请求
    //如果接口已经设置无需登录,那也就无需鉴权了
    //
    // 无需登录的接口,*表示全部
    protected $noNeedLogin = [];
    // 无需鉴权的接口,*表示全部
    protected $noNeedRight = [];



    protected $setting = [
        'app_id' => '846719332886-aulitahujg1t1227po1hh0h719t638b2.apps.googleusercontent.com',  //客户端ID
        'redirect_uri' => 'http://9sqyet.natappfree.cc/back.php',     //回调地址
        'app_secret' => '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',             //客户端密钥
    ];


    public function __construct()
    {
        $this->client_id = $this->setting['app_id'];
        $this->client_secret = $this->setting['app_secret'];
        $this->redirect_uri = $this->setting['redirect_uri'];

    }



    /**
     * 抓取CODE
     * @param $client_id
     * @param $redirect_uris
     */
    protected function getCode($client_id,$redirect_uris){
        $redirect_uris=urlencode($redirect_uris);
        $scope=urlencode('https://www.googleapis.com/auth/userinfo.profile');
        $url = "https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=offline&client_id={$client_id}&redirect_uri={$redirect_uris}&state&scope={$scope}&approval_prompt=auto";
        header('Location:' . $url);
    }


    /**
     * 抓取TOKEN
     * @param $postData
     * @param string $purl
     * @return bool
     */
    protected function getToken($postData,$purl='https://accounts.google.com/o/oauth2/token'){

        $fields = (is_array($postData)) ? http_build_query($postData) : $postData;
        $curlHeaders = [
            'content-type: application/x-www-form-urlencoded;CHARSET=utf-8',
            'Content-Length: ' . strlen($fields),
        ];

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $purl);
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $curlHeaders);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $fields);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($curl);
        $responseCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);

        if($response && $responseCode == 200){

            $json = json_decode($response, true);
            $token=$json['access_token'];
            return $token;
        }else {
            return false;
        }

    }


    /**
     * 获取用户信息
     * @param $access_token
     * @return array
     */
    public function getUserInfo($access_token){
        $url = "https://www.googleapis.com/oauth2/v1/userinfo?access_token=".$access_token;
        $userInfo = json_decode(file_get_contents($url),true);

        $data['id']=$userInfo['id'];                     //ID
        $data['name']=$userInfo['name'];                //用户名
        $data['locale']=$userInfo['locale'];           //语言
        $data['picture']=$userInfo['picture'];         //头像
        $data['given_name']=$userInfo['given_name'];   //名字
        $data['family_name']=$userInfo['family_name']; //姓

        return $data;
    }
}
