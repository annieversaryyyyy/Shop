const { I } = inject();
// Add in your custom step files

Given("I have a defined step", () => {
  // TODO: replace with your own step
});

Given("я захожу на страницу {string}", (page) => {
  I.amOnPage("/" + page);
});

Given("я введу данные:", (table) => {
  table.rows.forEach((row) => {
    const name = row.cells[0].value;
    const value = row.cells[1].value;

    I.fillField(name, value);
  });
});

When("нажму на кнопку {string}", (buttonText) => {
  I.click(`//form//button[contains(text(), '${buttonText}')]`);
  I.wait(10);
});

Then("я должен увидеть сообщение {string}", (text) => {
  I.see(text);
});
