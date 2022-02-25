import fromKafkaTopic from 'rxjs-kafka';
import { interval, map} from 'rxjs';

const { message$$ } = fromKafkaTopic(
    {
        clientId: 'sink',
        brokers: ['my-cluster-kafka-bootstrap.kafka:9092']
    },
    { topic: 'test-topic-2', fromBeginning: true },
    { groupId: 'sink' }
);

message$$.subscribe(console.log);