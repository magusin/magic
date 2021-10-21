import "./language.css";

const Language = ({ setLanguage, language }) => {
  var countryList = [
    <img
      className="flag"
      alt="de"
      src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
    />,
    <img
      className="flag"
      alt="es"
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
    />,
    <img
      className="flag"
      alt="fr"
      src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
    />,
    <img
      className="flag"
      alt="it"
      src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
    />,
    <img
      className="flag"
      alt="jp"
      src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg"
    />,
    <img
      className="flag"
      alt="pt"
      src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
    />,
    <img
      className="flag"
      alt="ru"
      src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg"
    />,
    <img
      className="flag"
      alt="cn"
      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
    />,
    <img
      className="flag"
      alt="uk"
      src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg"
    />,
  ];

  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {[...Array(9)].map((flag, index) => (
          <div key={index} className="col">
            <div
              onClick={() => {
                setLanguage(index);
              }}
              className={
                index === language ? "p-3 border active" : "p-3 border bg-light"
              }
            >
              {countryList[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
