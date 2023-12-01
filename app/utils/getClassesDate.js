import moment from "moment";
import lista from "../libs/lista.json";

moment.updateLocale("pt-br", {
  months:
    "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
      "_"
    ),
  monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
});

moment.locale("pt-br");

let aulas = lista;

let dataAtual = new Date();

let aulasPassadas = [];
let aulasFuturas = [];

aulasFuturas.sort((a, b) => new Date(a.data) - new Date(b.data));
aulasPassadas.sort((a, b) => new Date(a.data) - new Date(b.data));

for (let i = 0; i < aulas.length; i++) {
  let dataAula = new Date(aulas[i].data);

  if (dataAula <= dataAtual) {
    aulasPassadas.push(aulas[i]);
  } else {
    aulasFuturas.push(aulas[i]);
  }
}

let aulasPassadasPorMesAno = {};
let aulasFuturasPorMesAno = {};

for (let i = 0; i < aulasPassadas.length; i++) {
  const dataAula = new Date(aulasPassadas[i].data);
  const mesAno = moment(dataAula).format("MMMM YYYY");

  if (!aulasPassadasPorMesAno[mesAno]) {
    aulasPassadasPorMesAno[mesAno] = [];
  }

  aulasPassadasPorMesAno[mesAno].push(aulasPassadas[i]);
  aulasPassadasPorMesAno[mesAno].sort(
    (a, b) => new Date(b.data) - new Date(a.data)
  );
}

for (let i = 0; i < aulasFuturas.length; i++) {
  const dataAula = new Date(aulasFuturas[i].data);
  const mesAno = moment(dataAula).format("MMMM YYYY");

  if (!aulasFuturasPorMesAno[mesAno]) {
    aulasFuturasPorMesAno[mesAno] = [];
  }

  aulasFuturasPorMesAno[mesAno].push(aulasFuturas[i]);
}

export { aulasPassadasPorMesAno, aulasFuturasPorMesAno };
