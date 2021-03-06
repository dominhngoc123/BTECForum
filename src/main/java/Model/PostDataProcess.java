/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import Entity.Post;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Ngoc Do Minh
 */
public class PostDataProcess {

    public Connection getConnection() {
        Connection connection = null;
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            String url = "jdbc:sqlserver://127.0.0.1:1433;DatabaseName=BTEC4rumDB";
            String user = "sa";
            String password = "anhyeuem";
            try {
                connection = DriverManager.getConnection(url, user, password);
            } catch (SQLException ex) {
                Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return connection;
    }

    public List<Post> getForumDisplayPost() {
        List<Post> listPost = new ArrayList<>();
        Connection connection = getConnection();
        String sqlQuery = "SELECT * FROM tblPost WHERE LEN(postID) = 10 AND _status = 1 ORDER BY dateAdded DESC";
        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(sqlQuery);
            while (resultSet.next()) {
                Post post = new Post();
                post.setPostID(resultSet.getString(1));
                post.setPostTitle(resultSet.getNString(2));
                post.setPostContent(resultSet.getNString(3));
                String tmp = resultSet.getString(4);
                post.setThread((new ThreadDataProcess()).getDataByID(connection, tmp));
                tmp = resultSet.getString(5);
                post.setUser((new UserDataProcess()).getDataByEmail(connection, tmp));
                post.setDateAdded(ConvertDate.getDateTime(resultSet.getString(6)));
                post.setStatus(resultSet.getString(7));
                post.setApprovedDate(ConvertDate.getDateTime(resultSet.getString(8)));
                listPost.add(post);
            }
            resultSet.close();
            statement.close();
            connection.close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listPost;
    }

    public List<Post> getPost() {
        List<Post> listPost = new ArrayList<>();
        Connection connection = getConnection();
        String sqlQuery = "SELECT * FROM tblPost WHERE LEN(postID) = 10 ORDER BY dateAdded DESC";
        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(sqlQuery);
            while (resultSet.next()) {
                Post post = new Post();
                post.setPostID(resultSet.getString(1));
                post.setPostTitle(resultSet.getNString(2));
                post.setPostContent(resultSet.getNString(3));
                String tmp = resultSet.getString(4);
                post.setThread((new ThreadDataProcess()).getDataByID(connection, tmp));
                tmp = resultSet.getString(5);
                post.setUser((new UserDataProcess()).getDataByEmail(connection, tmp));
                post.setDateAdded(ConvertDate.getDateTime(resultSet.getString(6)));
                post.setStatus(resultSet.getString(7));
                post.setApprovedDate(ConvertDate.getDateTime(resultSet.getString(8)));
                listPost.add(post);
            }
            resultSet.close();
            statement.close();
            connection.close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listPost;
    }

    public List<Post> getNewPost() {
        List<Post> listPost = new ArrayList<>();
        String sqlQuery = "SELECT TOP (5) * FROM tblPost WHERE LEN(postID) = 10 AND _status = 1 ORDER BY dateAdded DESC";
        Connection connection = getConnection();
        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(sqlQuery);
            while (resultSet.next()) {
                Post post = new Post();
                post.setPostID(resultSet.getString(1));
                post.setPostTitle(resultSet.getNString(2));
                post.setPostContent(resultSet.getNString(3));
                String tmp = resultSet.getString(4);
                post.setThread((new ThreadDataProcess()).getDataByID(connection, tmp));
                tmp = resultSet.getString(5);
                post.setUser((new UserDataProcess()).getDataByEmail(connection, tmp));
                post.setDateAdded(ConvertDate.getDateTime(resultSet.getString(6)));
                post.setStatus(resultSet.getString(7));
                post.setApprovedDate(ConvertDate.getDate(resultSet.getString(8)));
                listPost.add(post);
            }
            resultSet.close();
            statement.close();
            connection.close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listPost;
    }

    public boolean createPost(String postTitle, String postContent, String threadID, String accountEmail, String status) {
        String postID = generatePostID(threadID);
        boolean isAdded = false;
        String sqlQuery = "";
        if (status.length() < 2) {
            if (!status.equals("2")) {
                sqlQuery += "INSERT INTO tblPost VALUES(?, ?, ?, ?, ?, CURRENT_TIMESTAMP, 1, CURRENT_TIMESTAMP)";
            } else {
                sqlQuery += "INSERT INTO tblPost VALUES(?, ?, ?, ?, ?, CURRENT_TIMESTAMP, 2, NULL)";
            }
        } else {
            sqlQuery += "INSERT INTO tblPost VALUES(?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?, NULL)";
        }
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
            preparedStatement.setString(1, postID);
            preparedStatement.setString(2, postTitle);
            preparedStatement.setString(3, postContent);
            preparedStatement.setString(4, threadID);
            preparedStatement.setString(5, accountEmail);
            if (status.length() > 1) {
                preparedStatement.setString(6, status);
            }
            isAdded = (preparedStatement.executeUpdate() > 0);
            preparedStatement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return isAdded;
    }

    public boolean createComment(String postID, String postTitle, String postContent, String threadID, String accountEmail) {
        String commentID = generatCommentID(postID);
        boolean isAdded = false;
        String sqlQuery = "";
        sqlQuery = "INSERT INTO tblPost VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, 1, CURRENT_TIMESTAMP)";
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
            preparedStatement.setString(1, commentID);
            preparedStatement.setString(2, postTitle);
            preparedStatement.setString(3, postContent);
            preparedStatement.setString(4, threadID);
            preparedStatement.setString(5, accountEmail);
            isAdded = (preparedStatement.executeUpdate() > 0);
            preparedStatement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return isAdded;
    }

    public List<Post> getDataByPosterEmail(String accountEmail) {
        List<Post> listPost = new ArrayList<>();
        Connection connection = getConnection();
        String sqlQuery = "SELECT * FROM tblPost WHERE accountEmail = ? AND LEN(postID) = 10";
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(sqlQuery);
            preparedStatement.setString(1, accountEmail);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                Post post = new Post();
                post.setPostID(resultSet.getString(1));
                post.setPostTitle(resultSet.getNString(2));
                post.setPostContent(resultSet.getNString(3));
                String tmp = resultSet.getString(4);
                post.setThread((new ThreadDataProcess()).getDataByID(connection, tmp));
                tmp = resultSet.getString(5);
                post.setUser((new UserDataProcess()).getDataByEmail(connection, tmp));
                post.setDateAdded(ConvertDate.getDateTime(resultSet.getString(6)));
                post.setStatus(resultSet.getString(7));
                post.setApprovedDate(ConvertDate.getDateTime(resultSet.getString(8)));
                listPost.add(post);
            }
            resultSet.close();
            preparedStatement.close();
            connection.close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listPost;
    }

    public static void main(String[] args) {
        PostDataProcess p = new PostDataProcess();
        System.out.println(p.generatCommentID("THR01P0008"));
    }

    public List<Post> getPostByID(String postID) {
        List<Post> listPost = new ArrayList<>();
        if (postID != null) {
            Connection connection = getConnection();
            String sqlQuery = "SELECT * FROM tblPost WHERE postID LIKE ? ORDER BY dateAdded";
            try {
                PreparedStatement preparedStatement = connection.prepareStatement(sqlQuery);
                preparedStatement.setString(1, "%" + postID + "%");
                ResultSet resultSet = preparedStatement.executeQuery();
                while (resultSet.next()) {
                    Post post = new Post();
                    post.setPostID(resultSet.getString(1));
                    post.setPostTitle(resultSet.getNString(2));
                    post.setPostContent(resultSet.getNString(3));
                    String tmp = resultSet.getString(4);
                    post.setThread((new ThreadDataProcess()).getDataByID(connection, tmp));
                    tmp = resultSet.getString(5);
                    post.setUser((new UserDataProcess()).getDataByEmail(connection, tmp));
                    post.setDateAdded(ConvertDate.getDateTime(resultSet.getString(6)));
                    post.setStatus(resultSet.getString(7));
                    post.setApprovedDate(ConvertDate.getDateTime(resultSet.getString(8)));
                    listPost.add(post);
                }
                resultSet.close();
                preparedStatement.close();
                connection.close();
            } catch (SQLException ex) {
                Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return listPost;
    }

    public int getCommentCount(String postID) {
        int commentCount = 0;
        String sqlQuery = "SELECT * FROM tblPost WHERE postID LIKE ? AND LEN(postID) != 10";
        Connection connection = getConnection();
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(sqlQuery);
            preparedStatement.setString(1, "%" + postID + "%");
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                commentCount++;
            }
            resultSet.close();
            preparedStatement.close();
            connection.close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return commentCount;
    }

    public Post getSpecificPost(String postID) {
        Post post = new Post();
        Connection connection = getConnection();
        String sqlQuery = "SELECT * FROM tblPost WHERE postID = ?";
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(sqlQuery);
            preparedStatement.setString(1, postID);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                post.setPostID(resultSet.getString(1));
                post.setPostTitle(resultSet.getNString(2));
                post.setPostContent(resultSet.getNString(3));
                String tmp = resultSet.getString(4);
                post.setThread((new ThreadDataProcess()).getDataByID(connection, tmp));
                tmp = resultSet.getString(5);
                post.setUser((new UserDataProcess()).getDataByEmail(connection, tmp));
                post.setDateAdded(ConvertDate.getDateTime(resultSet.getString(6)));
                post.setStatus(resultSet.getString(7));
                post.setApprovedDate(ConvertDate.getDateTime(resultSet.getString(8)));
            }
            resultSet.close();
            preparedStatement.close();
            connection.close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return post;
    }

    public boolean adminUpdatePost(String postID, String postTitle, String postContent, String threadID) {
        boolean isUpdated = false;
        String sqlQuery = "UPDATE tblPost set postTitle = ?, postContent = ?, threadID = ?, _status = 1 WHERE postID = ?";
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
            preparedStatement.setString(1, postTitle);
            preparedStatement.setString(2, postContent);
            preparedStatement.setString(3, threadID);
            preparedStatement.setString(4, postID);
            isUpdated = (preparedStatement.executeUpdate() > 0);
            preparedStatement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return isUpdated;
    }

    public boolean updatePost(String postID, String status) {
        boolean isUpdate = false;
        if (status.length() == 1) {
            String sqlQuery = "UPDATE tblPost SET _status = ?, approvedDate = CURRENT_TIMESTAMP WHERE postID = ?";
            try {
                PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
                preparedStatement.setString(1, status);
                preparedStatement.setString(2, postID);
                isUpdate = (preparedStatement.executeUpdate() > 0);
                preparedStatement.close();
                getConnection().close();
            } catch (SQLException ex) {
                Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else {
            String sqlQuery = "DELETE tblPost WHERE postID = ?; UPDATE tblPost SET _status = '1', approvedDate = CURRENT_TIMESTAMP WHERE postID = ?";
            try {
                PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
                preparedStatement.setString(1, status);
                preparedStatement.setString(2, postID);
                isUpdate = (preparedStatement.executeUpdate() > 0);
            } catch (SQLException ex) {
                Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return isUpdate;
    }

    public boolean deletePost(String postID) {
        boolean isDelete = false;
        String sqlQuery = "DELETE tblPost WHERE postID = ?";
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
            preparedStatement.setString(1, postID);
            isDelete = (preparedStatement.executeUpdate() > 0);
            preparedStatement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return isDelete;
    }

    public List<Post> searchPost(String searchString) {
        List<Post> listPost = new ArrayList<>();
        Connection connection = getConnection();
        String sqlQuery = "SELECT * FROM tblPost WHERE LEN(postID) = 10 AND  (postTitle LIKE ? or postContent LIKE ?) ORDER BY dateAdded DESC";
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(sqlQuery);
            preparedStatement.setString(1, "%" + searchString + "%");
            preparedStatement.setString(2, "%" + searchString + "%");
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next())
            {
                Post post = new Post();
                post.setPostID(resultSet.getString(1));
                post.setPostTitle(resultSet.getNString(2));
                post.setPostContent(resultSet.getNString(3));
                String tmp = resultSet.getString(4);
                post.setThread((new ThreadDataProcess()).getDataByID(connection, tmp));
                tmp = resultSet.getString(5);
                post.setUser((new UserDataProcess()).getDataByEmail(connection, tmp));
                post.setDateAdded(ConvertDate.getDateTime(resultSet.getString(6)));
                post.setStatus(resultSet.getString(7));
                post.setApprovedDate(ConvertDate.getDateTime(resultSet.getString(8)));
                listPost.add(post);
            }
            resultSet.close();
            preparedStatement.close();
            connection.close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listPost;
    }
    public String generatePostID(String threadID) {
        String newPostID = threadID;
        if (threadID != null) {
            String sql = "SELECT postID FROM tblPost WHERE postID LIKE '%" + threadID + "%' AND LEN(postID) = 10";
            try {
                PreparedStatement preparedStatement = getConnection().prepareStatement(sql);
                List<Integer> listPostIndex = new ArrayList<>();
                ResultSet resultSet = preparedStatement.executeQuery();
                while (resultSet.next()) {
                    String tmp = resultSet.getString(1);
                    int tmpNum = Integer.parseInt(tmp.substring(Math.max(0, tmp.length() - 4)));
                    listPostIndex.add(tmpNum);
                }
                int index = 1;
                for (int i : listPostIndex) {
                    if (i >= index) {
                        index = i + 1;
                    }
                }
                if (index < 10) {
                    newPostID += "P000";
                    newPostID += index;
                } else if (index < 100) {
                    newPostID += "P00";
                    newPostID += index;
                } else if (index < 1000) {
                    newPostID += "P0";
                    newPostID += index;
                } else if (index < 10000) {
                    newPostID += "P";
                    newPostID += index;
                }
                resultSet.close();
                preparedStatement.close();
                getConnection().close();
            } catch (SQLException ex) {
                Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return newPostID;
    }

    public String generatCommentID(String baseID) {
        String newCommentID = "";
        List<Integer> listOrder = new ArrayList<>();
        String sql = "SELECT postID FROM tblPost WHERE postID LIKE ? AND LEN(postID) >= ? AND LEN(postID) <= ?";
        try {
            int baseIDLength = baseID.length();
            PreparedStatement preparedStatement = getConnection().prepareStatement(sql);
            preparedStatement.setString(1, "%" + baseID + "%");
            preparedStatement.setInt(2, baseIDLength + 2);
            preparedStatement.setInt(3, baseIDLength + 3);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int tmpNum = 0;
                String tmp = resultSet.getString(1);
                int tmpLength = tmp.length();
                tmpNum = Integer.parseInt(tmp.substring(baseIDLength + 1, tmpLength));
                listOrder.add(tmpNum);
            }
            resultSet.close();
            preparedStatement.close();
        } catch (SQLException ex) {
            Logger.getLogger(PostDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (listOrder.size() == 0) {
            newCommentID = baseID + "." + 1;
        } else {
            newCommentID = baseID + "." + (Collections.max(listOrder) + 1);
        }
        return newCommentID;
    }
}
