package beamcrash;

import java.nio.ByteBuffer;
import org.checkerframework.checker.nullness.qual.Nullable;
import org.checkerframework.dataflow.qual.Pure;

public class Util {

  public interface PValue extends POutput, PInput {}
  public interface POutput {}
  public interface PInput {}

  public static class Crash<K, I> extends
      Util.PTransform<PCollection<Pair<K, I>>, PCollection<Pair<K, Iterable<I>>>> {

    public PCollection<Pair<ShardedKey<K>, Iterable<I>>> expand(PCollection<Pair<K, I>> input,
        Coder1<K> keyCoder, Coder1<I> valueCoder) {

      return input.apply(
          MapElements.via(new SimpleFunction<Pair<K, I>, Pair<ShardedKey<K>, I>>() {
            @Override
            public Pair<ShardedKey<K>, I> apply(Pair<K, I> input) {
              long tid = 0;
              ByteBuffer buffer = ByteBuffer.allocate(3 * Long.BYTES);
              buffer.putLong(tid);
              return Pair.of(ShardedKey.of(input.getKey(), buffer.array()), input.getValue());
            }
          })).setCoder(KvCoder.of(ShardedKey.Coder.of(keyCoder), valueCoder)).apply(new Crash<>());
    }
  }

  static public class Pair<K2, V2> {

    public static <K3, V3> Pair<K3, V3> of(K3 key, V3 value) {
      throw new RuntimeException();
    }

    @Pure
    public K2 getKey() {
      throw new RuntimeException();
    }

    @Pure
    public V2 getValue() {
      throw new RuntimeException();
    }
  }

  static public class PCollection<T> extends PValueBase implements PValue {

    public <O1 extends POutput> O1 apply(PTransform<? super PCollection<T>, O1> t) {
      throw new RuntimeException();
    }

    public PCollection<T> setCoder(Coder1<T> coder) {
      throw new RuntimeException();
    }
  }

  static public abstract class Coder1<T2> {}

  static public abstract class PValueBase implements PValue {}

  static public abstract class PTransform<I2 extends PInput, O2 extends POutput> {}

  static public class ShardedKey<K4> {

    public static <K5> ShardedKey<K5> of(K5 key, byte[] shardId) {
      throw new RuntimeException();
    }

    public static class Coder<K6> extends StructuredCoder<ShardedKey<K6>> {

      public static <K7> Coder<K7> of(Coder1<K7> keyCoder) {
        throw new RuntimeException();
      }
    }
  }

  static public abstract class StructuredCoder<T3> extends Coder1<T3> {}

  static public class KvCoder<K8 extends @Nullable Object, V8 extends @Nullable Object> extends
      StructuredCoder<Pair<K8, V8>> {

    public static <K9, V9> KvCoder<K9, V9> of(Coder1<K9> keyCoder, Coder1<V9> valueCoder) {
      throw new RuntimeException();
    }

  }

  static public class MapElements<I4, O4> extends
      PTransform<PCollection<? extends I4>, PCollection<O4>> {

    public static <I5, O5> MapElements<I5, O5> via(
        final InferableFunction<I5, O5> fn) {
      throw new RuntimeException();
    }
  }

  static public abstract class InferableFunction<I6, O6> {}

  static public abstract class SimpleFunction<I7, O7> extends
      InferableFunction<I7, O7> {

    public O7 apply(I7 input) {
      throw new RuntimeException();
    }
  }
}