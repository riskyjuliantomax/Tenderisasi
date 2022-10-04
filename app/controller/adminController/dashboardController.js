const index = async (req, res) => {
  try {
    // breadcrumb
    let breadcrumb = [];
    breadcrumb.push({ label: "Home", url: "/admin/dashboard", isActive: "" });
    breadcrumb.push({
      label: "Admin Dashboard",
      url: "/admin/dashboard/",
      isActive: "active",
    });

    res.render("./admin/dashboard/index", {
      title: "Admin",
      breadcrumb: breadcrumb,
      currentUrl: req.originalUrl,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
};
