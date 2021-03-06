/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function loadContent(postID)
{
$.ajax({
type: "GET",
        url: "getDetailPostJson?postID=" + postID,
        success: function (itr)
        {
            var tmpStr = "";
            $.each(itr["listPost"], function () {
                if (this['postID'].length == 10)
                {
                tmpStr += "<div class='post__header container'>";
                        tmpStr += "<div class='post__header-title'>";
                        tmpStr += "<input type='hidden' id='threadID' value='" + this['thread'].threadID + "'/>";
                        tmpStr += "<input type='hidden' value='" + this['postID'] + "' id='postID'/>";
                        tmpStr += "<h4 id='postTitle'>" + this['postTitle'] + "</h4>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='post__header-action'>";
                        tmpStr += "<div class='btn-group'>";
                        tmpStr += "<div class='btn-group' role='group'>";
                        tmpStr += "<button type='button' class='btn-jump btn-post__header-action dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>";
                        tmpStr += "<span class='sr-only'>Toggle Dropleft</span>";
                        tmpStr += "<i class='fas fa-ellipsis-v'></i>";
                        tmpStr += "</button>";
                        tmpStr += "<div class='dropdown-menu edit-dropdown-menu'>";
                        tmpStr += "<a class='dropdown-item edit-dropdown-item' href='#'>Delete</a>";
                        tmpStr += "<button value='" + this['postID'] + "' class='dropdown-item edit-dropdown-item editPost'>Update</button>";
                        tmpStr += "<a class='dropdown-item edit-dropdown-item' href='#'>Report</a>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='post__body container'>";
                        tmpStr += "<div class='post__body-author'>";
                        tmpStr += "<div class='post__body-author-bg-img'>";
                        tmpStr += "<a data-toggle='modal' data-target='#profile-modal'><img src='" + this['user'].userAvatar + "' alt='" + this['user'].userFullName + "'></a>";
                        tmpStr += "</div>";
                        tmpStr += "<ul class='post__body-author-text'>";
                        tmpStr += "<li><span class='post__body-author-name' data-toggle='modal' data-target='#profile-modal'>" + this['user'].userFullName + "</span></li>";
                        tmpStr += "<li><span class='post__body-author-time'>Posted on&nbsp;" + this['approvedDate'] + "</span></li>";
                        tmpStr += "</ul>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='post__body-content' id='postContent' data-value='" + this['postContent'] + "'>" + this['postContent'];
                        tmpStr += "</div>";
                        tmpStr += "<div class='post__body-action unselecttable'>";
                        tmpStr += "<div class='post__body-action-like'>";
                        tmpStr += "<button type='button' class='btn-like btn-jump'><i class='far fa-thumbs-up'></i>";
                        tmpStr += "<span>Like</span><span>12</span></button>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='post__body-action-comment'>";
                        tmpStr += "<button type='button' class='btn-cmt btn-jump'>";
                        tmpStr += "<i class='far fa-comment-dots'></i>";
                        tmpStr += "<span>Comment</span>";
                        tmpStr += "<span>" + itr['listPost'].size + "</span>";
                        tmpStr += "</button>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='post__body-action-share'>";
                        tmpStr += "<button type='button' class='btn-jump'>";
                        tmpStr += "<i class='far fa-share-square'></i>";
                        tmpStr += "<span>Share</span>";
                        tmpStr += "</button>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='post__footer container' id='post__footer'>";
                        tmpStr += "<div class='post__footer-post-comment'>";
                        tmpStr += "<div class='cmt__action-container'>";
                        tmpStr += "<div class='cmt__action-container-avatar'>";
                        tmpStr += "<img class='cmt__action-avatar' src='<s:property value='#session.userAvatar'/>' alt=''>";
                        tmpStr += "</div>";
                        tmpStr += "<form onsubmit='postComment('" + this['postID'] + "');' method='POST' class='cmt__action-post-area'>";
                        tmpStr += "<div class='cmt__action-post-area-header'>";
                        tmpStr += "<textarea name='' id='CMT" + this['postID'] + "'  class='form-control auto-textarea edit-txta' placeholder='Write your comment here...' required></textarea>";
                        tmpStr += "</div>";
                        tmpStr += "<div class=' cmt__action-post-area-bottom'>";
                        tmpStr += "<button type='submit' class='btn-post-cmt btn-jump'>Post</button>";
                        tmpStr += "</div>";
                        tmpStr += "</form>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='post__footer-comment'>";
                        tmpStr += "<div class='comments-container'>";
                } else
                {
                if (this['postID'].length == 12)
                {
                tmpStr += "</ul>";
                        tmpStr += "</li>";
                        tmpStr += "<ul id='comments-list' class='comments-list'>";
                        tmpStr += "<li>";
                        tmpStr += "<div class='comment-main-level'>";
                        tmpStr += "<div class='comment-avatar'><img src='" + this['user'].userAvatar + "'></div>";
                        tmpStr += "<div class='comment-box'>";
                        tmpStr += "<div class='comment-head'>";
                        tmpStr += "<h6 class='comment-name by-author'><a href='#none' data-toggle='modal' data-target='#profile-modal'>" + this['user'].userFullName + "</a></h6>";
                        tmpStr += "<span class='posted-time'>Posted on&nbsp;" + this['approvedDate'] + "</span>";
                        tmpStr += "<div class='comment-head-more-action'>";
                        tmpStr += "<button type='button' class='btn-jump btn-post__header-action dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>";
                        tmpStr += "<span class='sr-only'>Toggle Dropleft</span>";
                        tmpStr += "<i class='fas fa-ellipsis-v'></i>";
                        tmpStr += "</button>";
                        tmpStr += "<div class='dropdown-menu edit-dropdown-menu'>";
                        tmpStr += "<a class='dropdown-item edit-dropdown-item' href='#'>Delete</a>";
                        tmpStr += "<button value='" + this['postID'] + "' class='dropdown-item edit-dropdown-item x'>Update</button>";
                        tmpStr += "<a class='dropdown-item edit-dropdown-item' href='#'>Report</a>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='comment-content'>";
                        tmpStr += "<p id='" + this['postID'] + "'>" + this['postContent'] + "</p>";
                        tmpStr += "<div class='comment-open'>";
                        tmpStr += "<a href='#none' class='btn-like btn-like-ml' style='color: #B2BEC3;'>";
                        tmpStr += "<i class='far fa-thumbs-up'></i>";
                        tmpStr += "<span>2</span></a>";
                        tmpStr += "<a class='btn-reply'>";
                        tmpStr += "<i class='fa fa-reply'></i>";
                        tmpStr += "</a>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='comment-footer'>";
                        tmpStr += "<div class='comment-form'>";
                        tmpStr += "<form onsubmit='postComment('" + this['postID'] + "', '" + this[user].accountEmail + "')' method='post'>";
                        tmpStr += "<textarea id='CMT" + this['postID'] + "' class='form-control auto-textarea' name='' placeholder='Write your comment here' required></textarea>";
                        tmpStr += "<div class='pull-right send-button'>";
                        tmpStr += "<button type='submit' class='btn-send btn-jump'>send</button>";
                        tmpStr += "</div>";
                        tmpStr += "</form>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "<ul class='comments-list reply-list'>";
                } else
                {
                tmpStr += "</li>";
                        tmpStr += "<li>";
                        tmpStr += "<div class='comment-avatar'><img src='" + this['user'].userAvatar + "' alt=''>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='comment-box'>";
                        tmpStr += "<div class='comment-head'>";
                        tmpStr += "<h6 class='comment-name'><a href='#'>" + this['user'].userFullName + "</a></h6>";
                        tmpStr += "<span class='posted-time'>Posted on&nbsp;" + this['approvedDate'] + "</span>";
                        tmpStr += "<div class='comment-head-more-action'>";
                        tmpStr += "<button type='button' class='btn-jump btn-post__header-action dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>";
                        tmpStr += "<span class='sr-only'>Toggle Dropleft</span>";
                        tmpStr += "<i class='fas fa-ellipsis-v'></i>";
                        tmpStr += "</button>";
                        tmpStr += "<div class='dropdown-menu edit-dropdown-menu'>";
                        tmpStr += "<a class='dropdown-item edit-dropdown-item' href='#'>Delete</a>";
                        tmpStr += "<button value='" + this['postID'] + "' class='dropdown-item edit-dropdown-item editComment'>Update</button>";
                        tmpStr += "<a class='dropdown-item edit-dropdown-item' href='#'>Report</a>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='comment-content'>" + this['postContent'];
                        tmpStr += "<div class='comment-open'>";
                        tmpStr += "<a href='#none' class='btn-like btn-like-ml' style='color: #B2BEC3;'><i class='far fa-thumbs-up'></i>";
                        tmpStr += "<span>2</span></a>";
                        tmpStr += "<a class='btn-reply'>";
                        tmpStr += "<i class='fa fa-reply'></i>";
                        tmpStr += "</a>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "<div class='comment-footer'>";
                        tmpStr += "<div class='comment-form'>";
                        tmpStr += "<form onsubmit='postComment('" + this['postID'] + "', '" + this['user'].accountEmail + "')' method='post'>";
                        tmpStr += "<textarea id='CMT" + this['postID'] + "' class='form-control auto-textarea' name='' placeholder='Write your comment here' required></textarea>";
                        tmpStr += "<div class='pull-right send-button'>";
                        tmpStr += "<button type='submit' class='btn-send btn-jump'>send</button>";
                        tmpStr += "</div>";
                        tmpStr += "</form>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                        tmpStr += "</div>";
                }
                }
                });
                tmpStr += "</li>";
                tmpStr += "</ul>";
                tmpStr += "</li>";
                tmpStr += "</ul>";
                tmpStr += "</div>";
                tmpStr += "</div>";
                tmpStr += "<div class='post__footer-write-cmt'>";
                tmpStr += "<a href='#' class='write_cmt unselecttable'>Write your comment</a>";
                tmpStr += "</div>";
                tmpStr += "</div>";
                alert(tmpStr);
        }
});
}
//$(document).ready(function () {
//var postID = $("#postID").val();
//        loadContent(postID);
//});
