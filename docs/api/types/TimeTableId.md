# TimeTableId

Идентификатор таблицы с предустановленным списком времен/дат (как правило обозначают периодически повторяющиеся события). Один из типов группы `ResourceId`.

Поля, доступные в `TimeTableId:GetInfo()`

```
  entries: table или nil - список времен/дат, каждый элемент - таблица, содержит поле sysType, значение которого определяют смысл элемента (периодичность) и набор его полей:

    sysType == hourly - ежечасно, поля:
      minute: number (integer) - минута начала события, начиная с 0

    sysType == daily - ежедневно, поля:
      hour: number (integer) - час начала события, начиная с 0
      minute: number (integer) - минута начала события, начиная с 0

    sysType == weekly - еженедельно, поля:
      day: number (integer) - день недели начала события, 0-6 (понедельник-воскресенье)
      hour: number (integer) - час начала события, начиная с 0
      minute: number (integer) - минута начала события, начиная с 0

    sysType == monthly - ежемесячно, поля:
      day: number (integer) - день месяца начала события, начиная с 1
      hour: number (integer) - час начала события, начиная с 0
      minute: number (integer) - минута начала события, начиная с 0

    sysType == yearly - ежегодно, поля:
      month: number (enum "ENUM_Month...") - месяц начала события
      day: number (integer) - день месяца начала события, начиная с 1
      hour: number (integer) - час начала события, начиная с 0
      minute: number (integer) - минута начала события, начиная с 0

    sysType == now - "сейчас", поля:
      нет

    sysType == never - "никогда", поля:
      нет

    sysType == once - однократный, поля:
      year: number (integer) - год начала события
      month: number (enum "ENUM_Month...") - месяц начала события
      day: number (integer) - день месяца начала события, начиная с 1
      hour: number (integer) - час начала события, начиная с 0
      minute: number (integer) - минута начала события, начиная с 0
```

## Смотрите также

- [ENUM_Month](/api/enums/enums.ENUM_Month.md)