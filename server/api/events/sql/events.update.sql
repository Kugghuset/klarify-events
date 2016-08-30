UPDATE [dbo].[DimOtherEvents]
    SET 
          [Person] = @person
        , [Event] = @event
        , [Date] = @date
        , [isDeleted] = @isdeleted
WHERE ID = @id;