import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from '../../public/Liturgy-of-songs.pdf';  // Adjust the path as necessary

function PDFViewer() {
    const defaultScale = window.innerWidth < 768 ? 0.8 : 1.7; // 1.0x zoom for mobile, 2.0x for desktop
  return (
    <div>
      <h1>PDF Viewer</h1>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer 
        fileUrl={pdfFile} 
        defaultScale={defaultScale}
        />
      </Worker>
    </div>
  );
}

export default PDFViewer;
