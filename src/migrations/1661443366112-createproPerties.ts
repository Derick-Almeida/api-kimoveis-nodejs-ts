import { MigrationInterface, QueryRunner } from "typeorm";

export class createproPerties1661443366112 implements MigrationInterface {
    name = 'createproPerties1661443366112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold" boolean NOT NULL DEFAULT false, "value" numeric NOT NULL, "size" integer NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "scheluders_users_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "hour" TIME NOT NULL, "userIdId" uuid, CONSTRAINT "PK_db4f20130128caa79c92876ee10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" ADD CONSTRAINT "FK_e02f418b692b07fad6dccc49daa" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" DROP CONSTRAINT "FK_e02f418b692b07fad6dccc49daa"`);
        await queryRunner.query(`DROP TABLE "scheluders_users_properties"`);
        await queryRunner.query(`DROP TABLE "properties"`);
    }

}
