// Formating number values to string formated number. Adding comma every 3rd item from behind, cutting of first comma if number has it e.g: ,123,456 = $123,456. 

function revenueFormating(revenue) {
  revenue = revenue.toString();
  let formatedRevenue = [];
  let counter = 0;

  for (let i = revenue.length - 1; i >= 0; i--) {
    counter++;
    formatedRevenue.unshift(revenue[i]);
    if (counter % 3 === 0 && revenue[counter + 1]) formatedRevenue.unshift(",");
  }

  return (formatedRevenue = ["$", ...formatedRevenue].join(""));
}

export default revenueFormating;
