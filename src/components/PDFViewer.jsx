import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from '../../public/bob manuel requiem mass.pdf';  // Adjust the path as necessary

function PDFViewer() {
    const defaultScale = window.innerWidth < 768 ? 0.5 : 1.5; // 0.5x zoom for mobile, 1.5x for desktop
  return (
    <div>
      <h1></h1>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer 
        theme="dark"
        fileUrl={pdfFile} 
        defaultScale={defaultScale}
        />
      </Worker>
    </div>
  );
}

export default PDFViewer;
