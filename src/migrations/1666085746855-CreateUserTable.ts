import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1666085746855 implements MigrationInterface {
  name = 'CreateUserTable1666085746855';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`article_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(50) NOT NULL, \`content\` varchar(255) NOT NULL, \`author\` varchar(50) NOT NULL, \`creationDate\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`article_entity\``);
  }
}
