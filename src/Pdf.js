import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React from "react";


function Pdf() {
  const printpdf = (e) => {
    const doc = new jsPDF();

    // It can parse html:
    // <table id="my-table"><!-- ... --></table>
    autoTable(doc, {
      html: "#table1",
      startY:39,//from where the table should start
      didDrawCell:()=>{
        var image = "https://cdn-icons-png.flaticon.com/128/1150/1150643.png"
        doc.addImage(image,'png',28, 35, 18, 16)

      },
      didDrawPage: () => {
        var pageCount = doc.internal.getNumberOfPages(); //Total Page Numbers
        for (let i = 0; i < pageCount; i++) {
          doc.setPage(i);
          let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber; //Current Page
          doc.setFontSize(10);
          doc.text("page: " + pageCurrent + "/" + pageCount, 10, 10);
        }
      },
      styles: {
        fontSize: 20,
        halign: "center",
      },
    });
    autoTable(doc, {
      html: "#my-table",
      
      styles: {
        lineWidth: 0.35,
        lineColor: "black",
        textColor: "black",
      },
    });
    autoTable(doc, { html: "#table2" });

    // Or use javascript directly:
    autoTable(doc, {
        didDrawPage: () => {
            var pageCount = doc.internal.getNumberOfPages(); //Total Page Numbers
            for (let i = 0; i < pageCount; i++) {
              doc.setPage(i);
              let pageCurrent = doc.internal.getCurrentPageInfo().pageNumber; //Current Page
              doc.setFontSize(10);
              doc.text("page: " + pageCurrent + "/" + pageCount, 10, 10);
            }
          },
      styles: { fillColor: "ADD8E6", fontSize: 12, font: "times" },
      head: [["Name", "Email", "Country", "Currency"]],
      body: [
        ["David", "david@example.com", "Sweden", "swedish krona(SEK)"],
        ["Castille", "castille@example.com", "Spain", "Euro(€)"],
        ["Castille", "castille@example.com", "Spain", "Euro(€)"],
        ["David", "david@example.com", "Sweden", "swedish krona(SEK)"],
        // ...
      ],
    });
    doc.setFontSize(25);
    // var fileText="Details"
    // doc.text(fileText,14,15,"center")

    doc.save("table.pdf");
  };
  return (
    <div>
      <button onClick={printpdf}>Print</button>
      <table id="table1">
        <tr>
          <th>Employee Details</th>
        </tr>
      </table>

      <table id="my-table">
        <tr>
          <th>Employee Name</th> <th>Contact</th> <th>Country</th>{" "}
          <th>Currency</th>
        </tr>
        <tr>
          <td>David</td> <td>Helen Bennett</td> <td>Usa</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Castille</td> <td>Francisco Chang</td> <td>France</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td>{" "}
          <td>Mexico</td> <td>1 Peso</td>
        </tr>
        <tr>
          <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td>{" "}
          <td>1 Euro</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td>{" "}
          <td>Italy</td> <td>1 ITL</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>

        <tr>
          <td>David</td> <td>Helen Bennett</td> <td>Usa</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Castille</td> <td>Francisco Chang</td> <td>France</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td>{" "}
          <td>Mexico</td> <td>1 Peso</td>
        </tr>
        <tr>
          <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td>{" "}
          <td>1 Euro</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td>{" "}
          <td>Italy</td> <td>1 ITL</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>David</td> <td>Helen Bennett</td> <td>Usa</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Castille</td> <td>Francisco Chang</td> <td>France</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td>{" "}
          <td>Mexico</td> <td>1 Peso</td>
        </tr>
        <tr>
          <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td>{" "}
          <td>1 Euro</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td>{" "}
          <td>Italy</td> <td>1 ITL</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>David</td> <td>Helen Bennett</td> <td>Usa</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Castille</td> <td>Francisco Chang</td> <td>France</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td>{" "}
          <td>Mexico</td> <td>1 Peso</td>
        </tr>
        <tr>
          <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td>{" "}
          <td>1 Euro</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td>{" "}
          <td>Italy</td> <td>1 ITL</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>David</td> <td>Helen Bennett</td> <td>Usa</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Castille</td> <td>Francisco Chang</td> <td>France</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td>{" "}
          <td>Mexico</td> <td>1 Peso</td>
        </tr>
        <tr>
          <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td>{" "}
          <td>1 Euro</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td>{" "}
          <td>Italy</td> <td>1 ITL</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>David</td> <td>Helen Bennett</td> <td>Usa</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Castille</td> <td>Francisco Chang</td> <td>France</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td>{" "}
          <td>Mexico</td> <td>1 Peso</td>
        </tr>
        <tr>
          <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td>{" "}
          <td>1 Euro</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td>{" "}
          <td>Italy</td> <td>1 ITL</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>David</td> <td>Helen Bennett</td> <td>Usa</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Castille</td> <td>Francisco Chang</td> <td>France</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td>{" "}
          <td>Mexico</td> <td>1 Peso</td>
        </tr>
        <tr>
          <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td>{" "}
          <td>1 Euro</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td>{" "}
          <td>Italy</td> <td>1 ITL</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>David</td> <td>Helen Bennett</td> <td>Usa</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Castille</td> <td>Francisco Chang</td> <td>France</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td>{" "}
          <td>Mexico</td> <td>1 Peso</td>
        </tr>
        <tr>
          <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td>{" "}
          <td>1 Euro</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td>{" "}
          <td>Italy</td> <td>1 ITL</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>David</td> <td>Helen Bennett</td> <td>Usa</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Castille</td> <td>Francisco Chang</td> <td>France</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td> <td>Maria Anders</td> <td>Germany</td>{" "}
          <td>1 EURO</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td> <td>Francisco Chang</td>{" "}
          <td>Mexico</td> <td>1 Peso</td>
        </tr>
        <tr>
          <td>Ernst Handel</td> <td>Roland Mendel</td> <td>Austria</td>{" "}
          <td>1 Euro</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td> <td>Giovanni Rovelli</td>{" "}
          <td>Italy</td> <td>1 ITL</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td> <td>Yoshi Tannamuri</td>{" "}
          <td>Canada</td> <td>1 Dollar</td>
        </tr>
      </table>

      <div></div>
    </div>
  );
}

export default Pdf;
