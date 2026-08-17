## EVENT_WIDGET_SHOW_CHANGED

### Описание
```
EVENT_WIDGET_SHOW_CHANGED
```
Событие присылается при изменении видимости контрола (с учётом видимости всех его родителей), только для тех виджетов, которым такое поведение было установлено с помощью функции `SetOnShowNotification(self, notify)`.

### Список параметров
- **`widget`** (`Widget`) - виджет, чья видимость изменилась.

- **`addonName`** (`string`) - имя аддона, которому принадлежит виджет.

### Смотрите также

- [SetOnShowNotification](/api/category/widget/Widget/method.SetOnShowNotification.md)
- [IsVisibleEx](/api/category/widget/Widget/method.IsVisibleEx.md)