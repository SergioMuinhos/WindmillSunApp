package com.bolsadeideas.springboot.backend.apirest.utils;

import java.io.IOException;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;


import com.bolsadeideas.springboot.backend.apirest.models.entity.Factura;
import com.bolsadeideas.springboot.backend.apirest.models.entity.ItemFactura;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Element;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;

import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

public class FacturaPDFExporter {

	private Factura facturaPDF;

	public FacturaPDFExporter(Factura f) {
		this.facturaPDF = f;
	}
	
	private void writeTableData(PdfPTable table) {
		//Header de la tabla 
		PdfPCell cell= new PdfPCell();
		cell.setPhrase(new Phrase("ID: "));
		table.addCell(cell);
		cell.setPhrase(new Phrase("Nombre"));
		table.addCell(cell);
		cell.setPhrase(new Phrase("Cantidad"));
		table.addCell(cell);
		cell.setPhrase(new Phrase("Precio Unit"));
		table.addCell(cell);
		cell.setPhrase(new Phrase("Precio IVA (21%)"));
		table.addCell(cell);
		cell.setPhrase(new Phrase("Total "));
		table.addCell(cell);
		
		//Data de la Tabla
		List<ItemFactura> items=this.facturaPDF.getItems();
		double importeIva=0;
		DecimalFormat f = new DecimalFormat("##.00");
		for(ItemFactura  i:items) {
			table.addCell(i.getProducto().getId()+"");
			table.addCell(i.getProducto().getNombre());
			table.addCell(i.getCantidad()+"");
			table.addCell(i.getImporte()+"€");
			importeIva=(i.getImporte()+ i.getImporte()*0.21);
			table.addCell(f.format(importeIva)+"€");
			table.addCell(f.format(i.getCantidad()*importeIva)+"€");	
			}
	}
	
	private void writeHeaderClient(Document doc) {
		PdfPTable table= new PdfPTable(1);
		PdfPCell cell= new PdfPCell();
		cell.setPhrase(new Phrase("Cliente: "));
		table.addCell(cell);
		table.setWidthPercentage(100);
		table.setSpacingBefore(15);
		table.setWidths(new float[] {2.5f});
		doc.add(table);
		doc.add(new Paragraph("ClienteID: "+this.facturaPDF.getCliente().getId()));
		doc.add(new Paragraph("Nombre: "+this.facturaPDF.getCliente().getNombre()));
		doc.add(new Paragraph("Email: "+this.facturaPDF.getCliente().getEmail()));
		
	}

	public void export(HttpServletResponse response) throws DocumentException, IOException {
		Document doc = new Document(PageSize.A4);
		PdfWriter.getInstance(doc, response.getOutputStream());
		doc.open();
		Font font1 =FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		font1.setSize(10);
		Paragraph pFactura=new Paragraph("Factura ID: "+this.facturaPDF.getId(),font1);
		pFactura.setAlignment(Element.ALIGN_RIGHT);
		doc.add(pFactura);
		DateFormat dateFormatter= new SimpleDateFormat("dd-MM-yyyy");
		String currentDate= dateFormatter.format(new Date());
		Paragraph pFactura_date=new Paragraph("Fecha: "+currentDate,font1);
		pFactura_date.setAlignment(Element.ALIGN_RIGHT);
		doc.add(pFactura_date);
		PdfPTable table= new PdfPTable(6);
		PdfPTable table_cliente= new PdfPTable(1);
		table.setWidthPercentage(100);
		table.setSpacingBefore(15);
		table.setWidths(new float[] {1.5f,3.0f,2.0f,3.0f,3.0f,2.5f});
		
		//Añadimos los campos y tablas creadas 
		//writeTableHeader(table_cliente);
		//Productos CABECERA
		PdfPTable tableCab= new PdfPTable(1);
		PdfPCell cell= new PdfPCell();
		cell.setPhrase(new Phrase("PRODUCTOS "));
		tableCab.addCell(cell);
		tableCab.setWidthPercentage(100);
		tableCab.setSpacingBefore(15);
		tableCab.setWidths(new float[] {2.5f});
		
		//Productos 
		writeTableData(table);
		writeHeaderClient(doc);
		doc.add(table_cliente);
		doc.add(tableCab);
		doc.add(table);
		
		Font font =FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		font.setSize(20);
		Paragraph pTotal=new Paragraph("Total: "+this.facturaPDF.getTotal()+"€",font);
		pTotal.setAlignment(Element.ALIGN_RIGHT);
		doc.add(pTotal);
		doc.add(new Paragraph("\n"));
		
		
		doc.close();
	}
}
