const chart = document.getElementById("myChart");

async function getChartData() {
  const firstApi =
    "https://run.mocky.io/v3/a34c5fe1-6025-4c9d-8402-5c777b685476";
  const secondApi =
    "https://run.mocky.io/v3/b6b3ee44-03f2-4d3d-84e1-1f2e68be6f7e";
  const thirdApi =
    "https://run.mocky.io/v3/8e7a5232-2974-4621-a818-0985e623169e";
  const fourthApi =
    "https://run.mocky.io/v3/9ef80280-6c04-4d01-ae55-e3846ba758de";
  const fiveApi =
    "https://run.mocky.io/v3/7826ab76-0be2-4103-8377-9a2669942868?mocky-delay=1500ms";
  try {
    //get response from api
    const response1 = await fetch(firstApi);
    const response2 = await fetch(secondApi);
    const response3 = await fetch(thirdApi);
    const response4 = await fetch(fourthApi);
    const response5 = await fetch(fiveApi);
    //get json data, and the real data array
    const firstFetch = await response1.json();
    const secondFetch = await response2.json();
    const thirdFetch = await response3.json();
    const fourthFetch = await response4.json();
    const fiveFetch = await response5.json();
    const firstArray = firstFetch.data;
    const secondArray = secondFetch.data;
    const thirdArray = thirdFetch.data;
    const fourthArray = fourthFetch.data;
    const fiveArray = fiveFetch.data;

    // define the x-labels
    const labels = firstArray.map((label) => label[0]);
    //define the bar data
    const firstBar = firstArray.map((data) => data[1]);
    const secondBar = secondArray.map((data) => data[1]);
    const thirdBar = thirdArray.map((data) => data[1]);
    const firstLine = fourthArray.map((data) => data[1]);
    const secondLine = fiveArray.map((data) => data[1]);
    //chart
    const myChart = new Chart(chart, {
      data: {
        labels: labels,
        datasets: [
          {
            type: "bar",
            label: "first bar",
            backgroundColor: "pink",
            borderColor: "pink",
            data: firstBar,
          },
          {
            type: "bar",
            yAxisID: "A",
            label: "second bar",
            backgroundColor: "green",
            borderColor: "green",
            data: secondBar,
          },
          {
            type: "bar",
            yAxisID: "A",
            label: "third bar",
            backgroundColor: "purple",
            borderColor: "purple",
            data: thirdBar,
          },
          {
            type: "line",
            yAxisID: "B",
            label: "first line",
            borderColor: "blue",
            data: firstLine,
          },
          {
            type: "line",
            yAxisID: "B",
            label: "first line",
            borderColor: "crimson",
            data: secondLine,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          A: {
            type: "linear",
            position: "left",
          },
          B: {
            type: "linear",
            position: "right",
            ticks: {
              max: 1,
              min: 0,
            },
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
}
getChartData();
