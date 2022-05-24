$(() => {
  $("#table").DataTable({
    ajax: { url: "js/table.json", dataSrc: "" },
    columns: [
      { data: "id" },
      { data: "firstName" },
      { data: "lastName" },
      { data: "PhoneNo" },
      { data: "handel" },
    ],
  });
});
