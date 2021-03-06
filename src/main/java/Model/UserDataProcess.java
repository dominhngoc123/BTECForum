/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import Entity.User;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Ngoc Do Minh
 */
public class UserDataProcess {

    public Connection getConnection() {
        Connection connection = null;
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            String url = "jdbc:sqlserver://127.0.0.1:1433;DatabaseName=BTEC4rumDB";
            String username = "sa";
            String pass = "anhyeuem";
            try {
                connection = DriverManager.getConnection(url, username, pass);
            } catch (SQLException ex) {
                Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return connection;
    }

    public List<User> getData() {
        List<User> listUser = new ArrayList<>();
        String sqlQuery = "SELECT * FROM tblAccount WHERE _role > 1";
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                User user = new User();
                user.setAccountEmail(resultSet.getString(1));
                user.setUsername(resultSet.getString(2));
                user.setPassword(resultSet.getString(3));
                user.setUserFullName(resultSet.getString(4));
                user.setUserAddress(resultSet.getString(5));
                user.setRole(resultSet.getString(6));
                user.setStatus(resultSet.getString(7));
                user.setUserDoB(resultSet.getString(8));
                user.setUserAvatar(resultSet.getString(9));
                user.setUserGender(resultSet.getString(10));
                user.setUserDescription(resultSet.getString(11));
                user.setUserPhonenumber(resultSet.getString(12));
                user.setDateAdded(ConvertDate.getDate(resultSet.getString(13)));                
                listUser.add(user);
            }
            resultSet.close();
            preparedStatement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listUser;
    }
    public List<User> searchUserByName(String searchContent) {
        List<User> listUser = new ArrayList<>();
        String sqlQuery = "SELECT * FROM tblAccount WHERE (userFullName LIKE N? or accountEmail LIKE ?)";
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
            preparedStatement.setString(1, "%" + searchContent + "%");
            preparedStatement.setString(2, "%" + searchContent + "%");
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                User user = new User();
                user.setAccountEmail(resultSet.getString(1));
                user.setUsername(resultSet.getString(2));
                user.setPassword(resultSet.getString(3));
                user.setUserFullName(resultSet.getString(4));
                user.setUserAddress(resultSet.getString(5));
                user.setRole(resultSet.getString(6));
                user.setStatus(resultSet.getString(7));
                user.setUserDoB(resultSet.getString(8));
                user.setUserAvatar(resultSet.getString(9));
                user.setUserGender(resultSet.getString(10));
                user.setUserDescription(resultSet.getString(11));
                user.setUserPhonenumber(resultSet.getString(12));
                user.setDateAdded(ConvertDate.getDate(resultSet.getString(13)));                
                listUser.add(user);
            }
            resultSet.close();
            preparedStatement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listUser;
    }
    public User getDataByEmail(String accountEmail)
    {
        User user = new User();
        String sqlQuery = "SELECT * FROM tblAccount WHERE accountEmail = ?";
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
            preparedStatement.setString(1, accountEmail);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                user.setAccountEmail(resultSet.getString(1));
                user.setUsername(resultSet.getString(2));
                user.setPassword(resultSet.getString(3));
                user.setUserFullName(resultSet.getString(4));
                user.setUserAddress(resultSet.getString(5));
                user.setRole(resultSet.getString(6));
                user.setStatus(resultSet.getString(7));
                user.setUserDoB(resultSet.getString(8));
                user.setUserAvatar(resultSet.getString(9));
                user.setUserGender(resultSet.getString(10));
                user.setUserDescription(resultSet.getString(11));
                user.setUserPhonenumber(resultSet.getString(12));
                user.setDateAdded(ConvertDate.getDate(resultSet.getString(13)));
            }
            resultSet.close();
            preparedStatement.close();
            getConnection().close();
            
        } catch (SQLException ex) {
            Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return user;
    }
    public User getDataByEmail(Connection connection, String accountEmail)
    {
        User user = new User();
        String sqlQuery = "SELECT * FROM tblAccount WHERE accountEmail = ?";
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(sqlQuery);
            preparedStatement.setString(1, accountEmail);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                user.setAccountEmail(resultSet.getString(1));
                user.setUsername(resultSet.getString(2));
                user.setPassword(resultSet.getString(3));
                user.setUserFullName(resultSet.getString(4));
                user.setUserAddress(resultSet.getString(5));
                user.setRole(resultSet.getString(6));
                user.setStatus(resultSet.getString(7));
                user.setUserDoB(resultSet.getString(8));
                user.setUserAvatar(resultSet.getString(9));
                user.setUserGender(resultSet.getString(10));
                user.setUserDescription(resultSet.getString(11));
                user.setUserPhonenumber(resultSet.getString(12));
                user.setDateAdded(ConvertDate.getDate(resultSet.getString(13)));
            }
            resultSet.close();
            preparedStatement.close();
        } catch (SQLException ex) {
            Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return user;
    }
    public boolean addUser(String accountEmail, String _username, String _password, String userFullname, String userAddress, int _role, int _status, String userDoB, String userAvatar, int userGender, String userDescription, String userPhonenumber) {
        boolean isAdded = false;
        String sqlQuery = "INSERT INTO tblAccount VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)";
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
            preparedStatement.setString(1, accountEmail);
            preparedStatement.setString(2, _username);
            preparedStatement.setString(3, _password);
            preparedStatement.setString(4, userFullname);
            preparedStatement.setString(5, userAddress);
            preparedStatement.setInt(6, _role);
            preparedStatement.setInt(7, _status);
            preparedStatement.setString(8, userDoB);
            preparedStatement.setString(9, userAvatar);
            preparedStatement.setInt(10, userGender);
            preparedStatement.setString(11, userDescription);
            preparedStatement.setString(12, userPhonenumber);
            isAdded = (preparedStatement.executeUpdate() > 0);
            preparedStatement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return isAdded;
    }

    public boolean updateUser(String accountEmail, String _username, String _password, String userFullname, String userAddress, int _role, int _status, String userDoB, String userAvatar, int userGender, String userDescription, String userPhonenumber) {
        boolean isUpdate = false;
        String sqlQuery = "UPDATE tblAccount SET _username = ?, _password = ?, userFullName = ?, userAddress = ?, _role = ?, _status = ?,  userDoB = ?, userAvatar = ?, userGender = ?, userDescription = ?, userPhonenumber = ? WHERE accountEmail = ?";
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
            preparedStatement.setString(1, _username);
            preparedStatement.setString(2, _password);
            preparedStatement.setString(3, userFullname);
            preparedStatement.setString(4, userAddress);
            preparedStatement.setInt(5, _role);
            preparedStatement.setInt(6, _status);
            preparedStatement.setString(7, userDoB);
            preparedStatement.setString(8, userAvatar);
            preparedStatement.setInt(9, userGender);
            preparedStatement.setString(10, userDescription);
            preparedStatement.setString(11, userPhonenumber);
            preparedStatement.setString(12, accountEmail);
            isUpdate = (preparedStatement.executeUpdate() > 0);
            preparedStatement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return isUpdate;
    }

    public boolean deleteUser(String accountEmail) {
        boolean isDelete = false;
        String sqlQuery = "DELETE tblAccount WHERE accountEmail = ?";
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
            preparedStatement.setString(1, accountEmail);
            isDelete = (preparedStatement.executeUpdate() > 0);
            preparedStatement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return isDelete;
    }
    public List<User> getModerator()
    {
        List<User> listModerator = new ArrayList<>();
        String sqlQuery = "SELECT * FROM tblAccount WHERE _role = 2";
        try {
            Statement statement = getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery(sqlQuery);
            while (resultSet.next())
            {
                User user = new User();
                user.setAccountEmail(resultSet.getString(1));
                user.setUsername(resultSet.getString(2));
                user.setPassword(resultSet.getString(3));
                user.setUserFullName(resultSet.getString(4));
                user.setUserAddress(resultSet.getString(5));
                user.setRole(resultSet.getString(6));
                user.setStatus(resultSet.getString(7));
                user.setUserDoB(resultSet.getString(8));
                user.setUserAvatar(resultSet.getString(9));
                user.setUserGender(resultSet.getString(10));
                user.setUserDescription(resultSet.getString(11));
                user.setUserPhonenumber(resultSet.getString(12));
                user.setDateAdded(ConvertDate.getDate(resultSet.getString(13)));                
                listModerator.add(user);
            }
            resultSet.close();
            statement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return listModerator;
    }
    public User getModeratorInCategory(String categoryID)
    {
        User user = new User();
        String sql = "SELECT * FROM tblAccount INNER JOIN tblCategory WHERE tblAccount.accountEmail = tblCategory.accountEmail AND tblCategory.categoryID = ?";
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sql);
            preparedStatement.setString(1, categoryID);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next())
            {
                user.setAccountEmail(resultSet.getString(1));
                user.setUsername(resultSet.getString(2));
                user.setPassword(resultSet.getString(3));
                user.setUserFullName(resultSet.getString(4));
                user.setUserAddress(resultSet.getString(5));
                user.setRole(resultSet.getString(6));
                user.setStatus(resultSet.getString(7));
                user.setUserDoB(resultSet.getString(8));
                user.setUserAvatar(resultSet.getString(9));
                user.setUserGender(resultSet.getString(10));
                user.setUserDescription(resultSet.getString(11));
                user.setUserPhonenumber(resultSet.getString(12));
                user.setDateAdded(ConvertDate.getDate(resultSet.getString(13)));
            }
            resultSet.close();
            preparedStatement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return user;
    }
    public boolean blockUser(String accountEmail, int status) {
        boolean isBlock = false;
        String sqlQuery;
        if (status == 1)
        {
            sqlQuery = "UPDATE tblAccount SET _status = 0 WHERE accountEmail = ?";
        }
        else
        {
            sqlQuery = "UPDATE tblAccount SET _status = 1 WHERE accountEmail = ?";
        }
        try {
            PreparedStatement preparedStatement = getConnection().prepareStatement(sqlQuery);
            preparedStatement.setString(1, accountEmail);
            isBlock = (preparedStatement.executeUpdate() > 0);
            preparedStatement.close();
            getConnection().close();
        } catch (SQLException ex) {
            Logger.getLogger(UserDataProcess.class.getName()).log(Level.SEVERE, null, ex);
        }
        return isBlock;
    }
}
