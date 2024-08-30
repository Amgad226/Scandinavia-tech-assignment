import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from 'apps/ms-event-receiver-data-provider/schemas/event.schema';
import { IPublishMessage } from 'libs/common/interfaces/publish-message.interface';
import { Model } from 'mongoose';

@Injectable()
export class EventRepository {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<Event>,
  ) {}

  public async create(msg: IPublishMessage) {
    const newEvent = new this.eventModel(msg);
    return newEvent.save();
  }

  async findMany(params?: {
    sort?: 'desc' | 'asc';
    skip?: number;
    limit?: number;
  }) {
    const query = this.eventModel.find();

    if (params?.sort) {
      query.sort({ createdAt: params.sort === 'desc' ? -1 : 1 });
    }
    if (params?.limit) {
      query.limit(params.limit);
    }
    if (params?.skip) {
      query.skip(params.skip);
    }

    return query.exec();
  }
}
