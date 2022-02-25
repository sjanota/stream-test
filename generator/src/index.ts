import fromKafkaTopic from 'rxjs-kafka';
import { interval, map} from 'rxjs';

const { pushMessage$$ } = fromKafkaTopic(
    {
        clientId: 'generator',
        brokers: ['my-cluster-kafka-bootstrap.kafka:9092']
    },
    { topic: 'test-topic-1', fromBeginning: true },
    { groupId: 'generator' }
);

interval(5000).pipe(
    map(x => ({x})),
).subscribe(pushMessage$$);