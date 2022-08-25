import { MigrationInterface, QueryRunner } from "typeorm";

export class createRelation1661444623936 implements MigrationInterface {
    name = 'createRelation1661444623936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" DROP CONSTRAINT "FK_e02f418b692b07fad6dccc49daa"`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" DROP CONSTRAINT "FK_4ff38c58aa975f1a7a8783b7cf5"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_f051b757f8e45139549dceb39af"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_0098c049d0ebdd566cbd5f5fa8d"`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" DROP COLUMN "userIdId"`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" DROP COLUMN "propertyIdId"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoryIdId"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "UQ_0098c049d0ebdd566cbd5f5fa8d"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "addressIdId"`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" ADD "propertyId" uuid`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "UQ_2b2211958ef1f0e3c680339100e" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" ADD CONSTRAINT "FK_7e9398732c348b3168079b90058" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" ADD CONSTRAINT "FK_db2d052153b16f5aa47432456ef" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_2b2211958ef1f0e3c680339100e" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" DROP CONSTRAINT "FK_db2d052153b16f5aa47432456ef"`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" DROP CONSTRAINT "FK_7e9398732c348b3168079b90058"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "UQ_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" DROP COLUMN "propertyId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "addressIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "UQ_0098c049d0ebdd566cbd5f5fa8d" UNIQUE ("addressIdId")`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoryIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" ADD "propertyIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" ADD "userIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_0098c049d0ebdd566cbd5f5fa8d" FOREIGN KEY ("addressIdId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_f051b757f8e45139549dceb39af" FOREIGN KEY ("categoryIdId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" ADD CONSTRAINT "FK_4ff38c58aa975f1a7a8783b7cf5" FOREIGN KEY ("propertyIdId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "scheluders_users_properties" ADD CONSTRAINT "FK_e02f418b692b07fad6dccc49daa" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
