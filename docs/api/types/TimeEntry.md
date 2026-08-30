# TimeEntry

Формат передачи времени. В зависимости от типа (type) заполняются определённые поля.
```
hourly: table or nil - если интервал ежечасный, то таблица с полями:
  type: String - тип
  minute: number (integer) - минута начала события, начиная с 0

daily: table or nil - если интервал ежедневный, то таблица с полями:
  type: String - тип
  hour: number (integer) - час начала события, начиная с 0
  minute: number (integer) - минута начала события, начиная с 0

weekly: table or nil - если интервал еженедельный, то таблица с полями:
  type: String - тип
  day: number (enum ENUM_DayOfWeek...) - день недели начала события, начиная с 1 ( 1 - понедельник, 7 - воскресенье )
  hour: number (integer) - час начала события, начиная с 0
  minute: number (integer) - минута начала события, начиная с 0

monthly: table or nil - если интервал ежемесячный, то таблица с полями:
  type: String - тип
  day: number (integer) - день месяца начала события, начиная с 1
  hour: number (integer) - час начала события, начиная с 0
  minute: number (integer) - минута начала события, начиная с 0

yearly: table or nil - если интервал ежегодный, то таблица с полями:
  type: String - тип
  sysMonth: string (enum "ENUM_Month...") - месяц начала события
  month: number (enum ENUM_Month...) - месяц начала события
  day: number (integer) - день месяца начала события, начиная с 1
  hour: number (integer) - час начала события, начиная с 0
  minute: number (integer) - минута начала события, начиная с 0

now: table or nil - если интервал "сейчас", то таблица с полями:
  type: String - тип

never: table or nil - если интервал "никогда", то таблица с полями:
  type: String - тип
```

## Смотрите также

- [mwar.GetEventStartTimeEntries](/api/category/mwar/function.mwar.GetEventStartTimeEntries.md)
- [rules.GetEventTimeIntervals](/api/category/rules/function.rules.GetEventTimeIntervals.md)
- [ENUM_DayOfWeek](/api/enums/enums.ENUM_DayOfWeek.md)
- [ENUM_Month](/api/enums/enums.ENUM_Month.md)