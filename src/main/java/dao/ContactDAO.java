package dao;
import model.Contact;
import util.DatabaseUtil;
import java.sql.*;

public class ContactDAO {
    public boolean saveContact(Contact contact) {
        String sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
        
        try (Connection conn = DatabaseUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setString(1, contact.getName());
            pstmt.setString(2, contact.getEmail());
            pstmt.setString(3, contact.getMessage());
            
            return pstmt.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}