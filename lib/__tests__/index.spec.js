const mdLinks = require("../index");

describe("Function mdLinks", () => {
  
  it("is a function", () => expect(typeof mdLinks).toBe("function"));

  it("returns link and text", (done) => {
    return mdLinks("./lib/__tests__/TestLink.md").then(result => {
      expect(result).toBe(result);
      done();
    });
  });

  it ("return Arquivo não encontrado", (done) => {
    return mdLinks("../NOEXIST.md").catch(rejects => { 
      expect(rejects).toBe(rejects);
      done();
    });
  });

  it ("return Arquivo não contêm links", (done) => {
    return mdLinks("./lib/__tests__/TestError.md").catch(rejects => {
      expect(rejects).toBe(rejects);
      done();
    });
  });
});