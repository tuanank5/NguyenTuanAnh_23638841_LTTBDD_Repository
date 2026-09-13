import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Header } from "./components/Header";
import { CategoryChips } from "./components/CategoryChips";
import { BookGrid } from "./components/BookGrid";
import { FloatingCartButton } from "./components/FloatingCartButton";
import { BOOKS } from "./data";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handlePressBook = (id: number) => {
    // For this combined demo, pressing a book increments cart count
    setCartCount((c) => c + 1);
  };

  return (
    <View style={styles.screen}>
      {/* 1. Fixed Header at the top */}
      <Header />

      {/* 2. ScrollView containing Chips + Grid — ensure paddingBottom is large enough so the FloatingCartButton doesn't cover the last book */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content}>
        <CategoryChips />
        <BookGrid books={BOOKS} onPressBook={handlePressBook} />
      </ScrollView>

      {/* 3. Floating cart button — OUTSIDE the ScrollView */}
      <FloatingCartButton count={cartCount} onPress={() => setCartCount(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F8FAFC" },
  content: { padding: 16, paddingBottom: 100 },
});
