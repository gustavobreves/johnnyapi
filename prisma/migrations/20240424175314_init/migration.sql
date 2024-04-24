-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(20) NOT NULL,
    "sobrenome" VARCHAR(20) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "telefone" VARCHAR(15) NOT NULL,
    "fotoPerfil" TEXT NOT NULL DEFAULT 'fotoPerfil.png',
    "hashedPassword" TEXT NOT NULL DEFAULT '',
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(30) NOT NULL DEFAULT '',
    "telefone" VARCHAR(11) NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "idEvento" INTEGER NOT NULL,
    "tipoCliente" TEXT NOT NULL DEFAULT 'PC',

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventoTipo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "EventoTipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "idEventoTipo" INTEGER NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "indicadoPor" TEXT NOT NULL DEFAULT '',
    "local" TEXT NOT NULL DEFAULT '',
    "statusVenda" CHAR(2) NOT NULL DEFAULT 'CI',
    "criadoEm" TIMESTAMPTZ(3) NOT NULL,
    "status" CHAR(1) NOT NULL DEFAULT 'A',

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_id_key" ON "Cliente"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EventoTipo_id_key" ON "EventoTipo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Evento_id_key" ON "Evento"("id");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_idEvento_fkey" FOREIGN KEY ("idEvento") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_idEventoTipo_fkey" FOREIGN KEY ("idEventoTipo") REFERENCES "EventoTipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
