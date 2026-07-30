## EVENT_INTERFACE_TOGGLE

### Описание

```
EVENT_INTERFACE_TOGGLE
```

Событие посылается, когда наступает время скрыть или показать интерфейс.

### Список параметров

- **`hide`** (`boolean`) - true, если требуется скрыть интерфейс.

- **`hideCursor`** (`boolean`) - true, если требуется скрыть курсор вместе с остальным интерфейсом.

- **`lockInput`** (`boolean`) - true, если блокируется управление камерой.

- **`useCinemaStripes`** (`boolean`) - true, если требуется отображение черных полос сверху и снизу экрана.

- **`toggleTarget`** (`number`(`ENUM_InterfaceToggle_Target`)) - объект, который должен быть скрыт или показан.