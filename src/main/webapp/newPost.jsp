<%-- 
    Document   : newPost
    Created on : Nov 16, 2020, 8:45:48 AM
    Author     : Ngoc Do Minh
--%>

<%@taglib prefix="s" uri="/struts-tags"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BTEC FPT Forum - Post</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--=============================================Favicon==================================================-->
        <link rel="icon" type="image/png" href="resources/img/logo_BTEC -head.png" />
        <!--==============================================Google font=================================================-->
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">
        <!--==========================================Fort Awesome=====================================================-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
              integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
        <!--=========================================Bootstrap css======================================================-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <!--===========================================Css Post====================================================-->
        <link rel="stylesheet" href="include/resources/css/post.css">
        <!--===========================================Css Base====================================================-->
        <link rel="stylesheet" href="include/resources/css/base.css">
        <!--===============================================Select2 css================================================-->
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
        <!--===============================================================================================-->

    </head>
    <style>
        .select2-container--material {
            width: 100% !important;
        }

        .select2-container {
            width: 100% !important;
        }

        .select2-selection:focus {
            outline: none;
        }
        .select2-search__field{
            border-radius: 8px !important;
        }

        .select2-search__field:focus {
            outline-color: #80bdff;
            border-radius: 8px !important;
        }

        .select2-container--default .select2-selection--single {
            border: none !important;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35) !important;
            min-height: 40px;
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered{
            padding-left: 15px !important;
            line-height: 40px !important;
        }

        .select2-container--default .select2-selection--single .select2-selection__arrow{
            top: 6px !important;
        }
        .select2-results__options{
            border: white !important;
            box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.1) !important;
            -moz-box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.1) !important;
            -webkit-box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.1) !important;
            -o-box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.1) !important;
            -ms-box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.1) !important;
        }

    </style>
    <body class="preloading">
        <!-- *loading -->
        <div class="load">
            <img src="include/resources/gif/loader.gif" alt="">
        </div>
        <!-- *header -->
        <header class="header sticky-top unselecttable" id="header">
            <div class="header_top">
                <div class="header_top-search-box">
                    <a class="header_top-search-box-search-btn" href="#">
                        <i class="fas fa-search header_top-search-box-small-icon"></i>
                    </a>
                    <input class="header_top-search-box-search-txt" type="text" name="" placeholder="Search..." />
                </div>
                <div class="header_top-user">
                    <div class="dropdown show dropdown_color">
                        <a class="btn btn-secondary btn-sm btn_user-color dropdown-toggle user_flex" href="#" role="button"
                           id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                           style="box-shadow: none;">
                            <div class="header_top-user-bg"><img src="include/resources/img/pic.png" alt=""
                                                                 class="header_top-user-img"></div>
                            <span class="header_top-user-name">john doe</span>
                        </a>

                        <ul class="dropdown-menu dropdown-menu-right edit_dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="index.html"><span
                                    class="fas fa-home dropdown-menu-icon-list"></span>Home</a>
                            <a class="dropdown-item dropdown-item-profile" data-toggle="modal"
                               data-target="#profile-modal"><span
                                    class="fas fa-user dropdown-menu-icon-list"></span>Prolife</a>
                            <a class="dropdown-item" href="#"><span
                                    class="fas fa-lock dropdown-menu-icon-list"></span>Password</a>
                            <a class="dropdown-item" href="managepost.html"><span
                                    class="fas fa-cog dropdown-menu-icon-list"></span>My
                                Posts</a>
                            <a class="dropdown-item" href="#"><span
                                    class="fas fa-sign-out-alt dropdown-menu-icon-list"></span>Log Out</a>
                        </ul>
                    </div>
                </div>
            </div>
            <nav class="header_bottom navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a href="index.html"><img src="include/resources/img/Logo_BTEC.png" alt="" class="header_bottom-logo"></a>
                    <button class="navbar-toggler edit_navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive">
                        <span class="edit_navbar-toggler-icon"><i class="fas fa-stream"></i></span>
                    </button>
                    <div class="collapse navbar-collapse header_bottom-drop-down" id="navbarResponsive">
                        <ul class="header_bottom-main-nav navbar-nav ml-auto">
                            <li class="nav-item"><a href="forumIT.html">Information Technology</a></li>
                            <li class="nav-item"><a href="">Graphic design</a></li>
                            <li class="nav-item"><a href="">Business administration</a></li>
                            <li class="nav-item"><a href="test.html">Test</a></li>
                            <li class="nav-item"><a href="#">Other</a></li>
                            <li class="nav-item"><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <!-- *Modal profile-->
        <div class="modal fade edit-modal-profile" id="profile-modal" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg edit-modal-dialog-profile" role="document">
                <div class="modal-content edit-modal-content">
                    <div class="modal-header edit-modal-header">
                        <button type="button" class="edit-modal-show-more"><i class="fas fa-angle-double-right"
                                                                              onclick="change_profile()"></i></button>
                        <button type="button" class="close edit-close-profile" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body modal-body-profile">
                        <div class="modal-body-profile-left" id="modal-body-profile-left">
                            <div class="modal-body-profile-pic">
                                <img src="include/resources/img/pic.png" alt="">
                            </div>
                            <div class="modal-body-profile-name"><span>John Doe</span>
                            </div>
                            <div class="modal-body-profile-desc"><span>Developer & Designer</span></div>
                            <div class="modal-body-profile-sm">
                                <a href="#" class="fab fa-facebook-f"></a>
                                <a href="#" class="fab fa-twitter"></a>
                                <a href="#" class="fab fa-github"></a>
                                <a href="#" class="fab fa-youtube"></a>
                            </div>
                            <a href="#" class="modal-body-profile-contact-btn">Contact Me</a>
                        </div>
                        <div class="modal-body-profile-right" id="modal-body-profile-right">
                            <ul>
                                <li>
                                    <h6>Name</h6><span>John Doe</span>
                                </li>
                                <li>
                                    <h6>Date of birth</h6><span>07/10/2020</span>
                                </li>
                                <li>
                                    <h6>Gender</h6><span>Male</span>
                                </li>
                                <li>
                                    <h6>Address</h6><span>107, Nguyen Phong Sac, Cau Giay, Ha Noi.</span>
                                </li>
                                <li>
                                    <h6>Phone Number</h6><span>0967115432</span>
                                </li>
                                <li>
                                    <button type="button" data-dismiss="modal" data-toggle="modal"
                                            data-target="#update-profile-modal"><i class="fas fa-user-edit"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-footer  modal-footer-profile">
                        <div class="modal-footer-profile-numbers">
                            <div class="modal-footer-profile-item">
                                <span>120</span>
                                <span>Posts</span>
                            </div>
                            <div class="modal-footer-profile-border-card"></div>
                            <div class="modal-footer-profile-item">
                                <span>127</span>
                                <span>Scores</span>
                            </div>
                            <div class="modal-footer-profile-border-card"></div>
                            <div class="modal-footer-profile-item">
                                <span>120K</span>
                                <span>Other</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- *Modal update profile-->
        <div class="modal fade edit-modal-profile" id="update-profile-modal" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog  edit-modal-dialog-profile" role="document">
                <div class="modal-content edit-modal-content">
                    <div class="modal-header edit-modal-header">
                        <button type="button" class="close edit-close-profile" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body modal-body-profile modal-body-profile-update">
                        <form action="" method="POST">
                            <div class="form-row-update-profile">
                                <div class="form-row">
                                    <div class="col-md-5 mb-3">
                                        <label for="validationDefault01">Name</label>
                                        <input type="text" class="form-control form-control-sm" id="validationDefault01"
                                               value="" minlength="6" maxlength="50" required>
                                    </div>
                                    <div class="col-md-5 mb-3">
                                        <label for="validationDefault02">Date of birth</label>
                                        <input type="date" class="form-control form-control-sm" id="validationDefault02"
                                               value="" required>
                                    </div>
                                    <div class="col-md-2 mb-3">
                                        <label for="validationDefault03">Gender</label>
                                        <select class="form-control form-control-sm" id="validationDefault03" required>
                                            <option selected disabled value="">Choose...</option>
                                            <option value="">Male</option>
                                            <option value="">Female</option>
                                            <option value="">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-5 mb-3">
                                        <label for="validationDefault07">Avatar</label>
                                        <input type="file" class="form-control form-control-sm form-control-file-avatar"
                                               id="validationDefault07">
                                    </div>
                                    <div class="col-md-5 mb-3">
                                        <label for="validationDefault04">Major</label>
                                        <input type="text" class="form-control form-control-sm" id="validationDefault04"
                                               value="" minlength="6" maxlength="50" required>
                                    </div>
                                    <div class="col-md-2 mb-3">
                                        <label for="validationDefault05">Phone</label>
                                        <input type="number" class="form-control form-control-sm" id="validationDefault05"
                                               min="100000000" onKeyPress="if (this.value.length == 10)
                                                           return false;">
                                    </div>
                                </div>
                                <div class="form-row ">
                                    <div class="col-md-12 mb-3">
                                        <label for="validationDefault06">Address</label>
                                        <input type="text" class="form-control form-control-sm" id="validationDefault06"
                                               minlength="10" maxlength="100">
                                    </div>
                                </div>
                            </div>
                            <div class="btn-action-update-profile">
                                <button class="btn btn-warning btn-jump btn-update-profile btn-update-profile-back"
                                        type="button" data-dismiss="modal" data-toggle="modal"
                                        data-target="#profile-modal">Back</button>
                                <button class="btn btn-success btn-jump btn-update-profile btn-update-profile-save"
                                        type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer  modal-footer-profile">
                        <div class="modal-footer-profile-numbers">
                            <div class="modal-footer-profile-item">
                                <span>120</span>
                                <span>Posts</span>
                            </div>
                            <div class="modal-footer-profile-border-card"></div>
                            <div class="modal-footer-profile-item">
                                <span>127</span>
                                <span>Scores</span>
                            </div>
                            <div class="modal-footer-profile-border-card"></div>
                            <div class="modal-footer-profile-item">
                                <span>120K</span>
                                <span>Other</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- *Announcements -->
        <section class="announcements  unselecttable">
            <div class="announcements-left-site">
                <h6>ANNOUNCEMENTS</h6>
            </div>
            <div class="announcements-right-site">
                <p>"Your time is limited, so don't waste it living someone else's life" - Thời gian của bạn luôn có hạn,
                    vì
                    vậy đừng lãng phí nó để sống cuộc đời khác"</p>
            </div>
        </section>
        <!-- *Content -->
        <section class="post-content">
            <div class="container-fluid">
                <form id="newPostForm" onsubmit="addPost();">
                    <input type="hidden" id="accountEmail" value="<s:property value="#session.accountEmail"/>">
                    <input type="hidden" id="userRole" value="<s:property value="#session.userRole"/>"/>
                    <input type="hidden" id="categoryModerator">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <select class="select2" id="sltTopic" required>
                                <s:iterator value="listTopic">
                                    <option value="<s:property value="topicID"/>"><s:property value="topicName"/></option>
                                </s:iterator>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select class="select2" id="sltCategory" required>
                                <s:iterator value="listCategory">
                                    <option value="<s:property value="categoryID"/>"><s:property value="categoryName"/></option>
                                </s:iterator>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select class="select2" id="sltThread" required>
                                <s:iterator value="listThread">
                                    <option value="<s:property value="threadID"/>"><s:property value="threadName"/></option>
                                </s:iterator>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <textarea id="postTitle" class="form-control auto-textarea post-inp-color" placeholder="Enter title here..."
                                      aria-label="With textarea" style="text-rendering: auto;" required></textarea>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-12">
                            <textarea name="" id="editor1" placeholder="Type text content here..."
                                      required>Write content here...</textarea>
                            <br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-jump btn-post btn-shadow">POST</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <!-- *scrollTop -->
    <div class="scrollTop">
        <a href="#" class="sclTop"><i class="far fa-arrow-alt-circle-up"></i></a>
    </div>
    <!-- *Footer -->
    <footer class="footer">
        <div class="infor-box-footer">
            <ul>
                <li>
                    <h5>Hà Nội</h5>
                </li>
                <li>
                    <p>Tầng 2, Tòa nhà Detech II, 107 Nguyễn Phong Sắc, Cầu Giấy, Hà Nội</p>
                </li>
                <li>
                    <p>Điện thoại: 0981 090 513</p>
                </li>
                <li>
                    <p>Email: btec.hn@fpt.edu.vn</p>
                </li>
                <li>
                    <p>Hotline: 0981 090 513</p>
                </li>
            </ul>
        </div>

        <div class="infor-box-footer">
            <ul>
                <li>
                    <h5>Đà Nẵng</h5>
                </li>
                <li>
                    <p>66B Võ Văn Tần, Quận Thanh Khê, TP.Đà Nẵng (Tòa nhà Savico Building)</p>
                </li>
                <li>
                    <p>Điện thoại: 0236 730 9268</p>
                </li>
                <li>
                    <p>Email: btec.dn@fpt.edu.vn</p>
                </li>
                <li>
                    <p>Hotline: 0905 888 535</p>
                </li>
            </ul>
        </div>

        <div class="infor-box-footer">
            <ul>
                <li>
                    <h5>
                        TP. Hồ Chí Minh
                    </h5>
                </li>
                <li>
                    <p>275 Nguyễn Văn Đậu - Quận Bình Thạnh - TP.Hồ Chí Minh</p>
                </li>
                <li>
                    <p>Điện thoại: 028 7300 9268</p>
                </li>
                <li>
                    <p>Email: btec.hcm@fpt.edu.vn</p>
                </li>
                <li>
                    <p>Hotline: 028 7300 9268 / 0942 25 68 25</p>
                </li>
            </ul>
        </div>

        <div class="infor-box-footer">
            <ul>
                <li>
                    <h5>Newsletter</h5>
                </li>
                <li>
                    <p class="footer-p-last">A rover wearing a fuzzy suit doesn’t alarm the real penguinsi</p>
                </li>
                <li>
                    <div class="footer-input-group">
                        <input type="text" class="footer-input-form-control" placeholder="Search for...">
                        <button><i class="fas fa-envelope btn-letter"></i></button>
                    </div>
                </li>
            </ul>
        </div>
    </footer>
</body>
<!--=============================================Jquery==================================================-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!--=============================================Select2==================================================-->
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
<!--=============================================Bootstrap js==================================================-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/js/materialize.min.js"></script> -->
<script src="include/resources/js/base.js"></script>
<script src="include/asset/ckeditor/ckeditor.js"></script>

<script type="text/javascript">
    // CKEDITOR
    // config
    config = {};
    config.entities_latin = false;
    config.lauguage = 'vi';
    config.allowedContent = true;
    config.removeFormatAttributes = '';
    config.extraPlugins = 'autogrow';
    // config.height = '80vh';

    // Define changes to default configuration here.
    // For complete reference see:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    // The toolbar groups arrangement, optimized for two toolbar rows.
    config.toolbarGroups = [
        {name: 'clipboard', groups: ['clipboard', 'undo']},
        {name: 'editing', groups: ['find', 'selection', 'spellchecker']},
        {name: 'links'},
        {name: 'insert'},
        {name: 'forms'},
        {name: 'tools'},
        {name: 'document', groups: ['mode', 'document', 'doctools']},
        {name: 'others'},
        '/',
        {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
        {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']},
        {name: 'styles'},
        {name: 'colors'},
        {name: 'about'}
    ];

    // Replace the <textarea id="editor1"> with a CKEditor 4
    // instance, using default configuration.
    CKEDITOR.replace('editor1', config);

    $(document).ready(function () {
        $(".select2").select2();
    })
</script>
<script type="text/javascript">
                                                   $("#sltTopic").change(function ()
                                                   {
                                                       var topicID = $(this).val();
                                                       $.ajax({
                                                           type: "GET",
                                                           url: "adminGetCategoryInTopic?topicID=" + topicID,
                                                           success: function (itr)
                                                           {
                                                               var categoryStr = "";
                                                               $.each(itr['listCategory1'], function ()
                                                               {
                                                                   categoryStr += "<option value='" + this['categoryID'] + "'>" + this['categoryName'] + "</option>";
                                                               });
                                                               $("#sltCategory").html(categoryStr);
                                                               $("#sltCategory").select2();
                                                           }
                                                       });
                                                   })
                                                   $("#sltCategory").change(function ()
                                                   {
                                                       var categoryID = $(this).val();
                                                       $.ajax({
                                                           type: "GET",
                                                           url: "getModerator?categoryID=" + categoryID,
                                                           success: function (data)
                                                           {
                                                               var accountEmail = data['category'].user.accountEmail;
                                                               $("#categoryModerator").val(accountEmail);
                                                           }
                                                       });
                                                       $.ajax({
                                                           type: "GET",
                                                           url: "adminGetThreadInCategory?categoryID=" + categoryID,
                                                           success: function (itr)
                                                           {
                                                               var threadStr = "";
                                                               $.each(itr['listThread1'], function ()
                                                               {
                                                                   threadStr += "<option value='" + this['threadID'] + "'>" + this['threadName'] + "</option>";
                                                               });
                                                               $("#sltThread").html(threadStr);
                                                               $("#sltThread").select2();
                                                           }
                                                       });
                                                   })
                                                   function addPost()
                                                   {
                                                       event.preventDefault();
                                                       var postTitle = $("#postTitle").val();
                                                       var postContent = CKEDITOR.instances["editor1"].getData();
                                                       postContent = encodeURI(postContent);
                                                       var threadID = $("#sltThread").val();
                                                       var userRole = $("#userRole").val();
                                                       var accountEmail = $("#accountEmail").val();
                                                       var moderator = $("#categoryModerator").val()
                                                       if ((userRole == 1) || ((userRole == 2) && (accountEmail == moderator)))
                                                       {
                                                           alert("Your post is uploaded to forum!")
                                                           window.location = "AddNewPost?postTitle=" + postTitle + "&postContent=" + postContent + "&threadID=" + threadID + "&accountEmail=" + accountEmail + "&status=1";
                                                       }
                                                       else
                                                       {
                                                           alert("Your post is waiting for approvement!")
                                                           window.location = "AddNewPost?postTitle=" + postTitle + "&postContent=" + postContent + "&threadID=" + threadID + "&accountEmail=" + accountEmail + "&status=2";
                                                       }
                                                   }
</script>
</html>