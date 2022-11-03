import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Prospecto, ProspectoRelations} from '../models';

export class ProspectoRepository extends DefaultCrudRepository<
  Prospecto,
  typeof Prospecto.prototype.Id,
  ProspectoRelations
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Prospecto, dataSource);
  }
}
