const mdLinks = require("../index");

describe("Function mdLinks", () => {
  
  it("is a function", () => expect(typeof mdLinks).toBe("function"));

  it("returns link and text", (done) => {
    return mdLinks("./lib/__tests__/TestLink.md").then(result => {
      expect(result).toEqual([
        {text: "Markdown", link: "https://pt.wikipedia.org/wiki/Markdown"},
        {text: "Node.js", link: "https://nodejs.org/"},
        {text: "md-links", link: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg"}
      ]);
      done();
    });
  });

  it ("return Arquivo não encontrado", (done) => {
    return mdLinks("../NOEXIST.md").catch(reject => { 
      expect(reject).toEqual("Arquivo não encontrado");
      done();
    });
  });

  it ("return Arquivo não contêm links", (done) => {
    return mdLinks("./lib/__tests__/TestError.md").catch(reject => {
      expect(reject).toEqual("Arquivo não contêm links");
      done();
    });
  });
});