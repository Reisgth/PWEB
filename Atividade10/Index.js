      const Aluno1 = {RA: 123, Nome: "João"};

      const Aluno2 = new Object();
      Aluno2.RA = 456;
      Aluno2.Nome = "Maria";

      class Aluno {
        constructor(RA, Nome) {
          this.RA = RA;
          this.Nome = Nome;
        }
      }
      const Aluno3 = new Aluno(789, "Pedro");

      document.write("<p>Forma 1 - RA: " + Aluno1.RA + ", Nome: " + Aluno1.Nome + "</p>");
      document.write("<p>Forma 2 - RA: " + Aluno2.RA + ", Nome: " + Aluno2.Nome + "</p>");
      document.write("<p>Forma 3 - RA: " + Aluno3.RA + ", Nome: " + Aluno3.Nome + "</p>");