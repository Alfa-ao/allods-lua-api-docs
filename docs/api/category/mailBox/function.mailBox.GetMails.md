# mailBox.GetMails

Возвращает список писем из почтового ящика, предварительно запрошенных с сервера.

## Описание

```lua
mailBox.GetMails(): table | nil
```

Функция возвращает информацию о письмах, предварительно полученную с сервера запросом `mailBox.RequestMails`. После прихода события `EVENT_MAILBOX_CHANGED_ON_SERVER` функция возвращает `nil` до следующего запроса `mailBox.RequestMails`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `table` | `nil` - индексированный с 0 список `table`, описывающих отдельные письма, или `nil`, если писем нет.

- **`mailId`** (`ObjectId`) - идентификатор письма.

- **`createdAt`** (`table`) - дата создания в формате `LuaFullDateTime`.

- **`owneredAt`** (`table`) - дата получения в формате `LuaFullDateTime`.

- **`remainingTime`** (`table`) - таблица с информацией об оставшемся времени нахождения письма в ящике.

    - **`d`** (`number`) - дни.

    - **`h`** (`number`) - часы.

    - **`m`** (`number`) - минуты.

    - **`s`** (`number`) - секунды.

- **`participantName`** (`WString`) - имя получателя или отправителя. Игнорируется, если письмо системное.

- **`flags`** (`table`) - таблица с флагами письма. Поля:

    - **`accountShared`** (`boolean`) - общее для аккаунта.

    - **`fromSystem`** (`boolean`) - письмо от системных сервисов.

    - **`readByOwner`** (`boolean`) - прочитано нынешним владельцем письма.

    - **`readByRecipient`** (`boolean`) - прочитано адресатом письма.

    - **`returnAllowed`** (`boolean`) - разрешено вернуть письмо отправителю.

    - **`returned`** (`boolean`) - письмо было возвращено.

- **`subject`** (`WString`) - тема письма. Игнорируется, если письмо системное.

- **`body`** (`WString`) - тело письма. Игнорируется, если письмо системное.

- **`money`** (`number`) - денежная сумма, содержащаяся в письме.

- **`items`** (`table`) - таблица предметов, где ключи являются номерами слотов, а значениями - `ObjectId` или `nil`.

- **`systemMail`** (`table` | `nil`) - `nil`, если письмо не системное (см. поле flags.fromSystem); иначе таблица с шаблонами полей письма.

    - **`body`** (`WString`) - шаблон тела письма.

    - **`from`** (`WString`) - шаблон отправителя.

    - **`subject`** (`WString`) - шаблон темы письма.

    - **`denyRemoveMailWithItems`** (`boolean`) - запрет на удаление письма с предметами.

    - **`sysName`** (`string`) - системное имя шаблона.

    - **`voteResource`** (`VoteId` | `ResourceId`) - идентификатор опроса.

- **`clientDataParams`** (`table` | `nil`) - `nil`, если письмо не системное (см. поле flags.fromSystem); иначе таблица с параметрами для шаблонов из systemMail, по формату аналогична полю values из `EVENT_CLIENT_MESSAGE`

## Примеры

### Получение списка писем

```lua
local mailList = mailBox.GetMails()
```

## Смотрите также

- [LuaFullDateTime](aewf)
- [mailBox.GetLimits()](aewf)
- [EVENT_CLIENT_MESSAGE](aewf)
- [mailBox.RequestMails()](aewf)
- [EVENT_MAILBOX_CHANGED_ON_SERVER](aewf)
- [mailBox.GetMail()](aewf)