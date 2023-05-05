import React from "react";
import "./Documents.scss";
import testFile from '../../../assets/documents/testtest.docx';
import loanContractFile from '../../../assets/documents/Loan-contract.docx';
import exposeFile from '../../../assets/documents/Expose.docx';
import factSheetFile from '../../../assets/documents/Fact-sheet.docx';

const Documents = () => {
  return (
    <div className="documents-block">
      <span className="documents-block-title" id="documents-block">Documents</span>
      <ul>
        <li className="documents-table-header">
          <span className="documents-table-header-date">Date</span>
          <span className="documents-table-header-name">Name</span>
          <span className="documents-table-header-document">Document</span>
        </li>
        <li className="documents-table-row">
          <span className="documents-table-row-date">26 Oct 2018 18:42 PM</span>
          <span className="documents-table-row-name">
            Vermögensanlagen-Informationsblatt (VIB)
          </span>
          <button>
            <a href={testFile} download>
              Download
            </a>
          </button>
        </li>
        <li className="documents-table-row">
          <span className="documents-table-row-date">26 Oct 2018 18:42 PM</span>
          <span className="documents-table-row-name">Loan contract</span>
          <button>
            <a href={loanContractFile} download>
              Download
            </a>
          </button>
        </li>
        <li className="documents-table-row">
          <span className="documents-table-row-date">26 Oct 2018 18:42 PM</span>
          <span className="documents-table-row-name">Exposé</span>
          <button>
            <a href={exposeFile} download>
              Download
            </a>
          </button>
        </li>
        <li className="documents-table-row">
          <span className="documents-table-row-date">26 Oct 2018 18:42 PM</span>
          <span className="documents-table-row-name">Fact sheet</span>
          <button>
            <a href={factSheetFile} download>
              Download
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Documents;
