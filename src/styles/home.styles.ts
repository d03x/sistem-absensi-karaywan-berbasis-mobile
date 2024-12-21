import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  employeeName: {
    color: "white",
    fontSize: 14,
    fontWeight: 700,
  },
  positionTitle: {
    color: "#dfdfdf",
    fontSize: 12,
    fontWeight: "500",
  },
  header: {
    paddingHorizontal: 10,
    marginTop:9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
  },
  headerWrapper: {
    gap: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  headerAvatar: {
    borderRadius: 5,
    width: 40,
    height: 40,
  },
  cardActivityItemBody: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  cardActivityItemHeader: {
    backgroundColor: "#006eff",
    paddingVertical: 14,
    paddingHorizontal: 18,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  cardActivityContainer: {
    marginTop: 5,
    overflow: "hidden",
    borderRadius: 5,
  },

  cardActivityWrapper: {
    paddingHorizontal: 10,
    paddingBottom: 6,
    marginTop: 8,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default HomeStyles;
