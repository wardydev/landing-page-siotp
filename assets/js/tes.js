const btnTes = document.getElementById("btn-tes");
const textAreaInput = document.getElementById("input-textarea-tes");
const inputValueTes = document.getElementById("input-valuet-tes");

const getData = async () => {
  if (inputValueTes.value === "") {
    alert("input value dulu");
    return;
  }
  try {
    const res = await fetch(
      `https://prekuel.com/wp-json/wp/v2/posts?per_page=${inputValueTes.value}`
    );
    const resJson = await res.json();
    renderDataTes(resJson);
    inputValueTes.value = "";
  } catch (err) {
    console.log(err);
  }
};

const renderDataTes = (data) => {
  textAreaInput.value = "";
  data &&
    data.map((item) => {
      let element = `
            ${item.slug}
            ${item.guid.rendered}
            =====================
        `;

      return (textAreaInput.value += element);
    });
};

btnTes.addEventListener("click", getData);
