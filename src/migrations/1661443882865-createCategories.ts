import { MigrationInterface, QueryRunner } from "typeorm";

export class createCategories1661443882865 implements MigrationInterface {
    name = 'createCategories1661443882865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" ADD "propertyIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" ADD CONSTRAINT "FK_4ff38c58aa975f1a7a8783b7cf5" FOREIGN KEY ("propertyIdId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" DROP CONSTRAINT "FK_4ff38c58aa975f1a7a8783b7cf5"`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" DROP COLUMN "propertyIdId"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
