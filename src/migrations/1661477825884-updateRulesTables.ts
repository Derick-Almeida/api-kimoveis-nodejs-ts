import { MigrationInterface, QueryRunner } from "typeorm";

export class updateRulesTables1661477825884 implements MigrationInterface {
  name = "updateRulesTables1661477825884";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
  }
}
