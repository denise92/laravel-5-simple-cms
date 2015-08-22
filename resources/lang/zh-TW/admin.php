<?php
return [

    /*
    |--------------------------------------------------------------------------
    | Language lines for Admin panel
    |--------------------------------------------------------------------------
    */

    "title"                         => "控制中心",
    "submit"                        => "送出",
    "last_login"                    => "最後登入",
    "profile"                       => "個人資料",
    "elfinder"                      => "檔案管理",
    "empty"                         => "目前沒有任何資料",
    // Menu
    "menu" => [
        "dashboard"                 => "統計表",
        
        "language" => [
            "root"                  => "語系管理",
            "all"                   => "所有語系",
            "add"                   => "新增語系"
        ],
        
        "user" => [
            "root"                  => "使用者管理",
            "all"                   => "所有使用者",
            "add"                   => "新增使用者"
        ],
        "company" => [
            "root"                  => "公司管理",
            "all"                   => "所有公司",
            "add"                   => "新增公司"
        ],
        "group" => [
            "root"                  => "群組管理",
            "all"                   => "所有群組",
            "add"                   => "新增群組"
        ],
        "setting"                   => "系統設定"
    ],
    // Operations
    "ops" => [
        "name"                      => "執行",
        "edit"                      => "編輯",
        "create"                    => "新增",
        "delete"                    => "刪除",
        "show"                      => "明細",
        "order"                     => "訂單",
        "confirmation"              => "是否確定?",
        "modified"                  => "修改於"
    ],
    // Fields
    "fields" => [
        "updated_at"                => "修改於",
        "created_at"                => "新增於",
        "published_at"              => "發佈於",
        "read"                      => "讀取",
        "dashboard" => [
            'total_visits'          => "總訪問數",
            'unique_visits'         => "不重複的訪問",
            'bounce_rate'           => "跳出率",
            'average_time'          => "平均停留時間",
            'page_visits'           => "平均頁面訪問量",
            'pages'                 => "頁數",
            'keywords'              => "關鍵字",
            'entrance_pages'        => "進入頁",
            'exit_pages'            => "離開頁",
            'time_pages'            => "時間",
            'os'                    => "作業系統",
            'browsers'              => "瀏覽器",
            'traffic_sources'       => "流量來源",
            'visits'                => "訪問",
            'visitors'              => "訪問者",
            'world_visitors'        => "訪問者分佈：全球",
            'region_visitors'       => "訪問者分佈：地區",
            'chart_visitors'        => "訪問者",
            'chart_region'          => "地區",
            'chart_country'         => "國家"
        ],
        "language" => [
            "title"                 => "標題",
            "code"                  => "國碼",
            "site_title"            => "網站名稱",
            "site_description"      => "網站敘述",
            "flag"                  => "圖示"
        ],
        
        "user" => [
            "name"                  => "姓名",
            "email"                 => "Email",
            "password"              => "密碼",
            "password_confirmation" => "確認密碼",
            "logged_in_at"          => "登入於",
            "logged_out_at"         => "登出於",
            "company"               => "公司",
            "group"                 => "群組",
            "ip_address"            => "IP"
        ],
        "setting" => [
            "email"                 => "Email",
            "facebook"              => "Facebook",
            "fb_app_id"             => "Facebook app_id",
            "og_type"               => "Facebook og_type",
            "og_site_name"          => "Facebook og_site_name",
            "analytics_id"          => "Google Analytics ID ( 格式: UA-XXXXXX-YY )",
            "meta_author"           => "Meta 網站持有者",
            "meta_desc"             => "Meta 網站敘述",
            "meta_keywords"         => "Meta 網站關鍵字",
            "logo"                  => "首頁 Logo",
        ],
        "save"                      => "儲存",
        "reset"                     => "重設",
        "uploaded"                  => "檔案上傳 :"
    ],
    // Titles of the pages, naming is made with each routes' name
    "root"                          => "統計表",
    "language" => [
        "index"                     => "語系管理",
        "edit"                      => "編輯語系",
        "create"                    => "新增語系",
        "show"                      => "語系明細"
    ],
    
    "user" => [
        "index"                     => "使用者管理",
        "edit"                      => "編輯使用者",
        "create"                    => "新增使用者",
        "show"                      => "使用者明細"
    ],
    "setting" => [
        "index"                     => "系統管理"
    ],
    // DataTables, files can be found @ https://datatables.net/plug-ins/i18n/
    "datatables" => [
        "sProcessing"               => "處理中...",
        "sLengthMenu"               => "顯示 _MENU_ 項目",
        "sZeroRecords"              => "未找到匹配的記錄",
        "sInfo"                     => "顯示 _START_ 到 _END_ 的 _TOTAL_ 項目",
        "sInfoEmpty"                => "顯示 0 到 0 的 0 項目",
        "sInfoFiltered"             => "(從_MAX_總數過濾)",
        "sInfoPostFix"              => "",
        "sSearch"                   => "搜尋:",
        "sUrl"                      => "",
        "oPaginate" => [
            "sFirst"                => "第一頁",
            "sPrevious"             => "上一頁",
            "sNext"                 => "下一頁",
            "sLast"                 => "最末頁",
        ]
    ],
    // Flash messages upon create, update and delete
    "create" => [
        "success"                   => "資源已成功建立.",
        "fail"                      => "建立資源操作已失敗."
    ],
    "update" => [
        "success"                   => "資源已被成功地更新.",
        "fail"                      => "更新資源操作失敗."
    ],
    "delete" => [
        "success"                   => "資源已被成功地刪除.",
        "fail"                      => "刪除資源操作失敗.",
        "self"                      => "你不能總是得到你想要的."
    ]
];