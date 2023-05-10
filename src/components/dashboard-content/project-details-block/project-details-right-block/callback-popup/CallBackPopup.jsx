import React, { useState } from "react";
import "./CallBackPopup.scss";
import PopupHeaderLogo from "../../../../../assets/img/popup-images/popup-header-logo.svg";
import PopupCloseImage from "../../../../../assets/img/popup-images/popup-close-button-image.svg";
import CallbackPopupNameIcon from "../../../../../assets/img/popup-images/callback-popup-icons/callback-popup-name-icon.svg";
import CallbackPopupEmailIcon from "../../../../../assets/img/popup-images/callback-popup-icons/callback-popup-email-icon.svg";
import CallbackPopupNumberIcon from "../../../../../assets/img/popup-images/callback-popup-icons/callback-popup-number-icon.svg";
import CallbackPopupDateIcon from "../../../../../assets/img/popup-images/callback-popup-icons/callback-popup-date-icon.svg";
import CallbackPopupTimeIcon from "../../../../../assets/img/popup-images/callback-popup-icons/callback-popup-time-icon.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CallBackPopup = ({ toggleCallbackPopup }) => {
  const country_list = [
    { country: "Country", code: "__", iso: "__" },
    { country: "Afghanistan", code: "93", iso: "AF" },
    { country: "Albania", code: "355", iso: "AL" },
    { country: "Algeria", code: "213", iso: "DZ" },
    { country: "Andorra", code: "376", iso: "AD" },
    { country: "Angola", code: "244", iso: "AO" },
    { country: "Anguilla", code: "1-264", iso: "AI" },
    { country: "Antarctica", code: "672", iso: "AQ" },
    { country: "Argentina", code: "54", iso: "AR" },
    { country: "Armenia", code: "374", iso: "AM" },
    { country: "Aruba", code: "297", iso: "AW" },
    { country: "Australia", code: "61", iso: "AU" },
    { country: "Austria", code: "43", iso: "AT" },
    { country: "Azerbaijan", code: "994", iso: "AZ" },
    { country: "Bahamas", code: "1-242", iso: "BS" },
    { country: "Bahrain", code: "973", iso: "BH" },
    { country: "Bangladesh", code: "880", iso: "BD" },
    { country: "Barbados", code: "1-246", iso: "BB" },
    { country: "Belarus", code: "375", iso: "BY" },
    { country: "Belgium", code: "32", iso: "BE" },
    { country: "Belize", code: "501", iso: "BZ" },
    { country: "Benin", code: "229", iso: "BJ" },
    { country: "Bermuda", code: "1-441", iso: "BM" },
    { country: "Bhutan", code: "975", iso: "BT" },
    { country: "Bolivia", code: "591", iso: "BO" },
    { country: "Botswana", code: "267", iso: "BW" },
    { country: "Brazil", code: "55", iso: "BR" },
    { country: "Brunei", code: "673", iso: "BN" },
    { country: "Bulgaria", code: "359", iso: "BG" },
    { country: "Burkina Faso", code: "226", iso: "BF" },
    { country: "Burundi", code: "257", iso: "BI" },
    { country: "Cambodia", code: "855", iso: "KH" },
    { country: "Cameroon", code: "237", iso: "CM" },
    { country: "Canada", code: "1", iso: "CA" },
    { country: "Cape Verde", code: "238", iso: "CV" },
    { country: "Chad", code: "235", iso: "TD" },
    { country: "Chile", code: "56", iso: "CL" },
    { country: "China", code: "86", iso: "CN" },
    { country: "Cocos Islands", code: "61", iso: "CC" },
    { country: "Colombia", code: "57", iso: "CO" },
    { country: "Comoros", code: "269", iso: "KM" },
    { country: "Cook Islands", code: "682", iso: "CK" },
    { country: "Costa Rica", code: "506", iso: "CR" },
    { country: "Croatia", code: "385", iso: "HR" },
    { country: "Cuba", code: "53", iso: "CU" },
    { country: "Curacao", code: "599", iso: "CW" },
    { country: "Cyprus", code: "357", iso: "CY" },
    { country: "Czech Republic", code: "420", iso: "CZ" },
    { country: "Denmark", code: "45", iso: "DK" },
    { country: "Djibouti", code: "253", iso: "DJ" },
    { country: "Dominica", code: "1-767", iso: "DM" },
    { country: "East Timor", code: "670", iso: "TL" },
    { country: "Ecuador", code: "593", iso: "EC" },
    { country: "Egypt", code: "20", iso: "EG" },
    { country: "El Salvador", code: "503", iso: "SV" },
    { country: "Eritrea", code: "291", iso: "ER" },
    { country: "Estonia", code: "372", iso: "EE" },
    { country: "Ethiopia", code: "251", iso: "ET" },
    { country: "Faroe Islands", code: "298", iso: "FO" },
    { country: "Fiji", code: "679", iso: "FJ" },
    { country: "Finland", code: "358", iso: "FI" },
    { country: "France", code: "33", iso: "FR" },
    { country: "French Polynesia", code: "689", iso: "PF" },
    { country: "Gabon", code: "241", iso: "GA" },
    { country: "Gambia", code: "220", iso: "GM" },
    { country: "Georgia", code: "995", iso: "GE" },
    { country: "Germany", code: "49", iso: "DE" },
    { country: "Ghana", code: "233", iso: "GH" },
    { country: "Gibraltar", code: "350", iso: "GI" },
    { country: "Greece", code: "30", iso: "GR" },
    { country: "Greenland", code: "299", iso: "GL" },
    { country: "Grenada", code: "1-473", iso: "GD" },
    { country: "Guam", code: "1-671", iso: "GU" },
    { country: "Guatemala", code: "502", iso: "GT" },
    { country: "Guernsey", code: "44-1481", iso: "GG" },
    { country: "Guinea", code: "224", iso: "GN" },
    { country: "Guinea-Bissau", code: "245", iso: "GW" },
    { country: "Guyana", code: "592", iso: "GY" },
    { country: "Haiti", code: "509", iso: "HT" },
    { country: "Honduras", code: "504", iso: "HN" },
    { country: "Hong Kong", code: "852", iso: "HK" },
    { country: "Hungary", code: "36", iso: "HU" },
    { country: "Iceland", code: "354", iso: "IS" },
    { country: "India", code: "91", iso: "IN" },
    { country: "Indonesia", code: "62", iso: "ID" },
    { country: "Iran", code: "98", iso: "IR" },
    { country: "Iraq", code: "964", iso: "IQ" },
    { country: "Ireland", code: "353", iso: "IE" },
    { country: "Isle of Man", code: "44-1624", iso: "IM" },
    { country: "Israel", code: "972", iso: "IL" },
    { country: "Italy", code: "39", iso: "IT" },
    { country: "Ivory Coast", code: "225", iso: "CI" },
    { country: "Jamaica", code: "1-876", iso: "JM" },
    { country: "Japan", code: "81", iso: "JP" },
    { country: "Jersey", code: "44-1534", iso: "JE" },
    { country: "Jordan", code: "962", iso: "JO" },
    { country: "Kazakhstan", code: "7", iso: "KZ" },
    { country: "Kenya", code: "254", iso: "KE" },
    { country: "Kiribati", code: "686", iso: "KI" },
    { country: "Kosovo", code: "383", iso: "XK" },
    { country: "Kuwait", code: "965", iso: "KW" },
    { country: "Kyrgyzstan", code: "996", iso: "KG" },
    { country: "Laos", code: "856", iso: "LA" },
    { country: "Latvia", code: "371", iso: "LV" },
    { country: "Lebanon", code: "961", iso: "LB" },
    { country: "Lesotho", code: "266", iso: "LS" },
    { country: "Liberia", code: "231", iso: "LR" },
    { country: "Libya", code: "218", iso: "LY" },
    { country: "Liechtenstein", code: "423", iso: "LI" },
    { country: "Lithuania", code: "370", iso: "LT" },
    { country: "Luxembourg", code: "352", iso: "LU" },
    { country: "Macao", code: "853", iso: "MO" },
    { country: "Macedonia", code: "389", iso: "MK" },
    { country: "Madagascar", code: "261", iso: "MG" },
    { country: "Malawi", code: "265", iso: "MW" },
    { country: "Malaysia", code: "60", iso: "MY" },
    { country: "Maldives", code: "960", iso: "MV" },
    { country: "Mali", code: "223", iso: "ML" },
    { country: "Malta", code: "356", iso: "MT" },
    { country: "Mauritania", code: "222", iso: "MR" },
    { country: "Mauritius", code: "230", iso: "MU" },
    { country: "Mayotte", code: "262", iso: "YT" },
    { country: "Mexico", code: "52", iso: "MX" },
    { country: "Micronesia", code: "691", iso: "FM" },
    { country: "Moldova", code: "373", iso: "MD" },
    { country: "Monaco", code: "377", iso: "MC" },
    { country: "Mongolia", code: "976", iso: "MN" },
    { country: "Montenegro", code: "382", iso: "ME" },
    { country: "Montserrat", code: "1-664", iso: "MS" },
    { country: "Morocco", code: "212", iso: "MA" },
    { country: "Mozambique", code: "258", iso: "MZ" },
    { country: "Myanmar", code: "95", iso: "MM" },
    { country: "Namibia", code: "264", iso: "NA" },
    { country: "Nauru", code: "674", iso: "NR" },
    { country: "Nepal", code: "977", iso: "NP" },
    { country: "Netherlands", code: "31", iso: "NL" },
    { country: "New Caledonia", code: "687", iso: "NC" },
    { country: "New Zealand", code: "64", iso: "NZ" },
    { country: "Nicaragua", code: "505", iso: "NI" },
    { country: "Niger", code: "227", iso: "NE" },
    { country: "Nigeria", code: "234", iso: "NG" },
    { country: "Niue", code: "683", iso: "NU" },
    { country: "North Korea", code: "850", iso: "KP" },
    { country: "Norway", code: "47", iso: "NO" },
    { country: "Oman", code: "968", iso: "OM" },
    { country: "Pakistan", code: "92", iso: "PK" },
    { country: "Palau", code: "680", iso: "PW" },
    { country: "Palestine", code: "970", iso: "PS" },
    { country: "Panama", code: "507", iso: "PA" },
    { country: "Paraguay", code: "595", iso: "PY" },
    { country: "Peru", code: "51", iso: "PE" },
    { country: "Philippines", code: "63", iso: "PH" },
    { country: "Pitcairn", code: "64", iso: "PN" },
    { country: "Poland", code: "48", iso: "PL" },
    { country: "Portugal", code: "351", iso: "PT" },
    { country: "Qatar", code: "974", iso: "QA" },
    { country: "Reunion", code: "262", iso: "RE" },
    { country: "Romania", code: "40", iso: "RO" },
    { country: "Russia", code: "7", iso: "RU" },
    { country: "Rwanda", code: "250", iso: "RW" },
    { country: "Saint Helena", code: "290", iso: "SH" },
    { country: "Saint Lucia", code: "1-758", iso: "LC" },
    { country: "Saint Martin", code: "590", iso: "MF" },
    { country: "Samoa", code: "685", iso: "WS" },
    { country: "San Marino", code: "378", iso: "SM" },
    { country: "Saudi Arabia", code: "966", iso: "SA" },
    { country: "Senegal", code: "221", iso: "SN" },
    { country: "Serbia", code: "381", iso: "RS" },
    { country: "Seychelles", code: "248", iso: "SC" },
    { country: "Sierra Leone", code: "232", iso: "SL" },
    { country: "Singapore", code: "65", iso: "SG" },
    { country: "Sint Maarten", code: "1-721", iso: "SX" },
    { country: "Slovakia", code: "421", iso: "SK" },
    { country: "Slovenia", code: "386", iso: "SI" },
    { country: "Somalia", code: "252", iso: "SO" },
    { country: "South Africa", code: "27", iso: "ZA" },
    { country: "South Korea", code: "82", iso: "KR" },
    { country: "South Sudan", code: "211", iso: "SS" },
    { country: "Spain", code: "34", iso: "ES" },
    { country: "Sri Lanka", code: "94", iso: "LK" },
    { country: "Sudan", code: "249", iso: "SD" },
    { country: "Suriname", code: "597", iso: "SR" },
    { country: "Swaziland", code: "268", iso: "SZ" },
    { country: "Sweden", code: "46", iso: "SE" },
    { country: "Switzerland", code: "41", iso: "CH" },
    { country: "Syria", code: "963", iso: "SY" },
    { country: "Taiwan", code: "886", iso: "TW" },
    { country: "Tajikistan", code: "992", iso: "TJ" },
    { country: "Tanzania", code: "255", iso: "TZ" },
    { country: "Thailand", code: "66", iso: "TH" },
    { country: "Togo", code: "228", iso: "TG" },
    { country: "Tokelau", code: "690", iso: "TK" },
    { country: "Tonga", code: "676", iso: "TO" },
    { country: "Tunisia", code: "216", iso: "TN" },
    { country: "Turkey", code: "90", iso: "TR" },
    { country: "Turkmenistan", code: "993", iso: "TM" },
    { country: "Tuvalu", code: "688", iso: "TV" },
    { country: "Uganda", code: "256", iso: "UG" },
    { country: "Ukraine", code: "380", iso: "UA" },
    { country: "United Kingdom", code: "44", iso: "GB" },
    { country: "United States", code: "1", iso: "US" },
    { country: "Uruguay", code: "598", iso: "UY" },
    { country: "Uzbekistan", code: "998", iso: "UZ" },
    { country: "Vanuatu", code: "678", iso: "VU" },
    { country: "Vatican", code: "379", iso: "VA" },
    { country: "Venezuela", code: "58", iso: "VE" },
    { country: "Vietnam", code: "84", iso: "VN" },
    { country: "Yemen", code: "967", iso: "YE" },
    { country: "Zambia", code: "260", iso: "ZM" },
    { country: "Zimbabwe", code: "263", iso: "ZW" },
  ];
  const [currentCountry, setCurrentCountry] = useState({
    country: "",
    code: "",
    iso: "",
  });

  function handleCountryChange(event) {
    const selectedCountry = country_list.find(
      (item) => item.country === event.target.value
    );
    setCurrentCountry(selectedCountry);
  }
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="callback-popup-background">
      <div className="callback-popup-container">
        <div className="callback-popup-header">
          <img src={PopupHeaderLogo} alt="" />
          <button onClick={toggleCallbackPopup}>
            <img src={PopupCloseImage} alt="" />
          </button>
        </div>
        <h1>Request a free callback</h1>
        <div className="callback-popup-inputs-container">
          <div className="callback-popup-name-email-container">
            <div className="callback-popup-name-container">
              <span className="callback-popup-input-title">Name</span>
              <div className="callback-popup-image-container">
                <img src={CallbackPopupNameIcon} alt="" />
              </div>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="callback-popup-name-container">
              <span className="callback-popup-input-title">Email</span>
              <div className="callback-popup-image-container">
                <img src={CallbackPopupEmailIcon} alt="" />
              </div>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="callback-popup-country-number-container">
            <div className="callback-popup-country-container">
              <span className="callback-popup-input-title">
                Callback number
              </span>
              <div className="callback-popup-image-container">
                <img src={CallbackPopupNumberIcon} alt="" />
              </div>
              <select
                className="callback-popup-country-select"
                onChange={(event) => handleCountryChange(event)}
              >
                {country_list.map((item) => (
                  <option value={item.country} key={item.iso}>
                    {item.country}
                  </option>
                ))}
              </select>
            </div>
            <div className="callback-popup-number-container">
              <div className="number-code-container">
                <span>+ {currentCountry.code || "__"}</span>
              </div>
              <input type="text" placeholder="000-00-00" />
            </div>
          </div>

          <div className="callback-popup-name-email-container">
            <div className="callback-popup-name-container">
              <span className="callback-popup-input-title">Callback date</span>
              <div className="callback-popup-image-container">
                <img src={CallbackPopupDateIcon} alt="" />
              </div>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Enter the date"
              />
            </div>
            <div className="callback-popup-name-container">
              <span className="callback-popup-input-title">Time (9-17 hr)</span>
              <div className="callback-popup-image-container">
                <img src={CallbackPopupTimeIcon} alt="" />
              </div>
              <input type="email" placeholder="Enter the time" />
            </div>
          </div>

          <div className="callback-popup-description-container">
            <span className="callback-popup-input-title">
              Description (optional)
            </span>
            <textarea
              className="description-textarea"
              rows="4"
              cols="50"
              placeholder="Write us something..."
            ></textarea>
          </div>
        </div>
        <button className="request-button">Request a free callback</button>
      </div>
    </div>
  );
};

export default CallBackPopup;
