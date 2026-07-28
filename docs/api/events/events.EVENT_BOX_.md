---
outline: deep
---
## EVENT_BOX_OPERATION_RESULT

### Описание

```
EVENT_BOX_OPERATION_RESULT
```

Уведомление о результате взаимодействия с сундучком (например, открытие через `avatar.OpenBox`). Работает по принципу коллбэка, сообщая клиенту о статусе выполнения операции.

::: warning Замечание
Коды результата операции описаны в перечислении `ENUM_BoxOperationResult_...`.
:::

### Список параметров

- **`sysResult`** (`string` | `ENUM_BoxOperationResult_...`) Код результата операции.

### Смотрите также

- [avatar.OpenBox](/api/category/avatar/function.avatar.OpenBox.md)