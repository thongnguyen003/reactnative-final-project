import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Nhận vào tin nhắn lỗi và hàm onRetry (để chạy lại khi bấm nút)
const ErrorBlock = ({ message, onRetry }: { message: string, onRetry?: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>⚠️</Text>
      <Text style={styles.title}>Đã xảy ra lỗi!</Text>
      <Text style={styles.message}>{message}</Text>
      
      {/* Chỉ hiện nút Thử lại nếu có truyền hàm onRetry vào */}
      {onRetry && (
        <TouchableOpacity style={styles.button} onPress={onRetry}>
          <Text style={styles.buttonText}>Thử lại</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff5f5', // Màu nền đỏ rất nhạt
    padding: 20,
  },
  icon: {
    fontSize: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#cc0000',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#cc0000',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ErrorBlock;